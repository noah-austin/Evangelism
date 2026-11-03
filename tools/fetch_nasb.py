# Fetch NASB 1995 text from Bible Gateway for a list of refs, to check data/verses.js.
# Usage: python3 -I tools/fetch_nasb.py refs.json cache_dir out.json
# refs.json is a JSON list of refs; out.json maps each ref to its official text.
import sys, json, re, time, os, urllib.parse, subprocess, html
from html.parser import HTMLParser
refs = json.load(open(sys.argv[1]))
cache = sys.argv[2]
out = {}

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.in_passage=0; self.depth=0; self.stack=[]; self.verses=[]; self.cur=None; self.skip=0; self.smallcaps=0; self.done=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs); cls=a.get('class','') or ''
        if tag in ('br','p','div') and self.in_passage and not self.done and self.cur is not None:
            self.verses.append((self.cur,' '))
        if tag=='br': return
        self.stack.append((tag,cls))
        if self.done: return
        if 'passage-text' in cls and not self.in_passage: self.in_passage=len(self.stack)
        if not self.in_passage: return
        if 'footnotes' in cls or 'crossrefs' in cls or 'full-chap-link' in cls: self.done=True; return
        if tag in ('sup','h3','h4') or 'chapternum' in cls or 'versenum' in cls:
            self.skip+=1; self._skiptag=len(self.stack)
        if 'small-caps' in cls or 'font-variant: small-caps' in (a.get('style') or ''): self.smallcaps+=1
        if tag=='span' and cls.startswith('text '):
            self.cur=cls
    def handle_endtag(self, tag):
        if not self.stack: return
        t,cls=self.stack.pop()
        if self.done or not self.in_passage: return
        if t in ('sup','h3','h4') or 'chapternum' in cls or 'versenum' in cls:
            self.skip=max(0,self.skip-1)
        if 'small-caps' in cls: self.smallcaps=max(0,self.smallcaps-1)
    def handle_data(self, data):
        if self.done or not self.in_passage or self.skip: return
        if self.cur is None: return
        # Small caps: the divine name (LORD, GOD) is printed in caps;
        # Old Testament quotes in the New Testament keep normal case
        if self.smallcaps and data.strip() in ('Lord', 'God', 'Lord’s', 'God’s', "Lord's", "God's"): data=data.upper()
        self.verses.append((self.cur,data))

for ref in refs:
    fn=os.path.join(cache, re.sub(r'[^A-Za-z0-9]+','_',ref)+'.html')
    if not os.path.exists(fn):
        url='https://www.biblegateway.com/passage/?search='+urllib.parse.quote(ref)+'&version=NASB1995'
        subprocess.run(['curl','-sS','-o',fn,url],check=False)
        time.sleep(0.4)
    s=open(fn,encoding='utf-8',errors='replace').read()
    p=P(); p.feed(s)
    # join text by verse class order
    parts=[]; 
    for cls,d in p.verses: parts.append(d)
    t=''.join(parts)
    t=re.sub(r'\*(?=\w)','',t)
    t=re.sub(r'\s+',' ',t).strip()
    t=re.sub(r'\s+([,;:.!?])',r'\1',t)
    out[ref]=t
json.dump(out, open(sys.argv[3],'w'), ensure_ascii=False, indent=1)
print('done', len(out), 'empty:', [r for r,t in out.items() if not t])
