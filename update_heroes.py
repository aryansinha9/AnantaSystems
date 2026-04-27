import os
import re

directory = "/Users/aryansinha/Documents/Sites/DoonsideHawks/DoonsideHawksSite/src/app"

import_statement = "import PageHero from '@/components/PageHero'\n"

# Matches the whole hero section
section_pattern = re.compile(r'<section\s+className=\{.*?hero.*?\}\s*>.+?</section>', re.DOTALL)
h1_pattern = re.compile(r'<h1[^>]*>(.*?)</h1>', re.DOTALL)
p_sub_pattern = re.compile(r'<p\s+className=\{.*?heroSub.*?\}[^>]*>(.*?)</p>', re.DOTALL)
breadcrumb_pattern = re.compile(r'<p\s+className="breadcrumb"[^>]*>(.*?)</p>', re.DOTALL)

for root, dirs, files in os.walk(directory):
    for file in files:
        if file == "page.tsx" and root != directory: # skip homepage
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            if 'className="hero' in content or "className={`hero" in content:
                # Find the section
                match = section_pattern.search(content)
                if match:
                    section_html = match.group(0)
                    
                    # Extract title
                    h1_match = h1_pattern.search(section_html)
                    title = h1_match.group(1).strip() if h1_match else ""
                    
                    # Extract subtitle
                    sub_match = p_sub_pattern.search(section_html)
                    subtitle = sub_match.group(1).strip() if sub_match else ""

                    # Extract breadcrumb label
                    # breadcrumb looks like <Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span>Club History</span>
                    bc_match = breadcrumb_pattern.search(section_html)
                    bc_last = ""
                    if bc_match:
                        bc_inner = bc_match.group(1)
                        # finding the last span
                        spans = re.findall(r'<span>(.*?)</span>', bc_inner)
                        if spans:
                            bc_last = spans[-1]
                        else:
                            bc_last = title # fallback
                    
                    if not bc_last:
                        bc_last = title
                        
                    # Remove html tags from title and subtitle if any
                    title = re.sub(r'<[^>]+>', '', title)
                    subtitle = re.sub(r'<[^>]+>', '', subtitle)
                    bc_last = re.sub(r'<[^>]+>', '', bc_last)
                    
                    subtitle_prop = f' subtitle="{subtitle}"' if subtitle else ""
                    
                    breadcrumbs_str = "{[{'label': 'Home', 'href': '/'}, {'label': '" + bc_last + "'}]}"
                    replacement = f'<PageHero\n                title="{title}"{subtitle_prop}\n                breadcrumbs={breadcrumbs_str}\n            />'

                    new_content = content.replace(section_html, replacement)
                    
                    if "import PageHero" not in new_content:
                        # Insert import after the first import or at top
                        import_idx = new_content.find("import ")
                        lines = new_content.split('\n')
                        for i, line in enumerate(lines):
                            if line.startswith("import "):
                                lines.insert(i+1, "import PageHero from '@/components/PageHero'")
                                break
                        new_content = '\n'.join(lines)
                        
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
