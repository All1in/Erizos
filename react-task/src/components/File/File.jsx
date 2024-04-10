import React, { Component } from "react";

export default class File extends Component {
    render() {
        const { file, path, searchTerm } = this.props;
        const fullPath = path ? `${path}/${file.name}` : file.name;

        if (file.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <div key={fullPath}>- {file.name} ({file.mimeType})</div>;
        }
        return null;
    }
}
