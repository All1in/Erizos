import React, {Component} from "react";
import Folder from "../Folder/Forlder";
import File from "../File/File";

class MyBrowser extends Component {
    state = {
        expandedFolders: [],
        searchTerm: '',
    };

    handleToggleFolder = folderName => {
        this.setState(prevState => ({
            expandedFolders: prevState.expandedFolders.includes(folderName) ?
                prevState.expandedFolders.filter(name => name !== folderName) :
                [...prevState.expandedFolders, folderName]
        }));
    };

    handleSearch = searchTerm => {
        this.setState({ searchTerm });
    };

    render() {
        const { data } = this.props;
        const { expandedFolders, searchTerm } = this.state;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => this.handleSearch(e.target.value)}
                />
                {data.map(item => (
                    item instanceof Folder ?
                        <Folder
                            key={item.name}
                            folder={item}
                            path=""
                            expandedFolders={expandedFolders}
                            onToggleFolder={this.handleToggleFolder}
                            renderFile={file => <Folder file={file} path="" searchTerm={searchTerm} />}
                        />
                        :
                        <File key={item.name} file={item} path="" searchTerm={searchTerm} />
                ))}
            </div>
        );
    }
}

// Example usage:
const sampleData = [
    new Folder('Folder 1', [
        new File('file1.txt', 'text/plain'),
        new File('file2.jpg', 'image/jpeg'),
        new Folder('Subfolder 1', [
            new File('file3.pdf', 'application/pdf')
        ])
    ]),
    new Folder('Folder 2', [
        new File('file4.docx', 'application/msword')
    ])
];

const myBrowser = <MyBrowser data={sampleData} />;

export default myBrowser;
