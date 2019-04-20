'''
Script to generate project pages from Markdown files.
'''

import os
from jinja2 import Template
import markdown2

def convertOne(mdFilePath, outDir):
    html = markdown2.markdown_path(mdFilePath)
    outFileName = os.path.basename(os.path.splitext(mdFilePath)[0]) + '.html'
    outFilePath = os.path.join(outDir, outFileName)
    
    with open(outFilePath, 'w') as out:
        out.write(html)

def convertAll(mdDir):
    generatedProjectDirectory = os.path.join('..', 'projects-generated')
    if not os.path.isdir(generatedProjectDirectory):
        os.mkdir(generatedProjectDirectory)

    for f in os.listdir(mdDir):
        filePath = os.path.join(mdDir, f)
        convertOne(filePath, generatedProjectDirectory)

def main():
    mdDir = os.path.join('..', 'md-project-files')
    convertAll(mdDir)

if __name__ == "__main__":
    main()