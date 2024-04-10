import React, { Component } from 'react';

export default class Folder extends Component {
    render() {
        const { folder, path, expandedFolders, onToggleFolder, renderFile } = this.props;
        const fullPath = path ? `${path}/${folder.name}` : folder.name;

        return (
            <div>
                <div onClick={() => onToggleFolder(fullPath)} style={{ cursor: 'pointer' }}>
                    {folder.expanded ? '-' : '+'} {folder.name}
                </div>
                {folder.expanded && folder.children.map(item => (
                    item instanceof Folder ?
                        <Folder
                            key={item.name}
                            folder={item}
                            path={fullPath}
                            expandedFolders={expandedFolders}
                            onToggleFolder={onToggleFolder}
                            renderFile={renderFile}
                        />
                        :
                        renderFile(item, fullPath)
                ))}
            </div>
        );
    }
}





