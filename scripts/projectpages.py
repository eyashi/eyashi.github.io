'''
Script to generate project pages from Markdown files.
'''

import os
import re
from jinja2 import Environment, Template
import markdown2

def getImageName(name, imgDir):
    d = os.listdir(imgDir)
    for img in d:
        if name in img:
            return img
    
    return None

def getTitle(name):
    projectDir = 'md-project-files'
    for p in os.listdir(projectDir):
        if name in p:
            with open(os.path.join(projectDir, p), 'r') as pf:
                titleLine = pf.readline()
                return titleLine.replace('#', '').rstrip()
    return None

def getDescript(name):
    projectDir = 'md-project-files'
    for p in os.listdir(projectDir):
        if name in p:
            with open(os.path.join(projectDir, p), 'r') as pf:
                pf.readline()
                descriptLine = pf.readline()
                return descriptLine.replace('#', '').rstrip()
    return None

def getProjectDicts(projectDir):
    imgDir = 'assets/img'
    projects = [
        os.path.splitext(i)[0] for i in
        os.listdir(projectDir)
        ]
    projectPages = [
        {
            'id': name,
            'img': getImageName(name, imgDir),
            'title': getTitle(name),
            'descript': getDescript(name)
            }
        for name in projects
    ]
    return projectPages

def modIndex():
    templatePath = 'index-template.html'
    renderPath = 'index.html'
    projectDir = 'projects-generated'
    projects = getProjectDicts(projectDir)

    with open(templatePath, 'r') as t:
        template = Environment().from_string(t.read())

    rendered = template.render(projects=projects)

    with open(renderPath, 'w') as out:
        out.write(rendered)

def convertOne(mdFilePath, outDir):
    html = markdown2.markdown_path(mdFilePath)
    outFileName = os.path.basename(os.path.splitext(mdFilePath)[0]) + '.html'
    outFilePath = os.path.join(outDir, outFileName)
    
    with open(outFilePath, 'w') as out:
        out.write(html)

def convertAll(mdDir):
    generatedProjectDirectory = 'projects-generated'
    if not os.path.isdir(generatedProjectDirectory):
        os.mkdir(generatedProjectDirectory)

    for f in os.listdir(mdDir):
        filePath = os.path.join(mdDir, f)
        convertOne(filePath, generatedProjectDirectory)

def main():
    mdDir = 'md-project-files'
    convertAll(mdDir)
    modIndex()

if __name__ == "__main__":
    main()
    # print(getTitle('test'))
    # print(getDescript('test'))