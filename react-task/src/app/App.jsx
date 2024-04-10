import MyBrowser from "../components/MyBrowser/MyBrowser";
import '../styles/App.css';

const sampleData = [
    {
        name: 'Folder 1',
        children: [
            { type: 'file', name: 'hello_world.js' },
            {
                type: 'folder',
                name: 'Folder A',
                children: [
                    {
                        type: 'folder',
                        name: 'Folder B',
                        children: [{ type: 'folder', name: 'Folder C', children: [{ type: 'file', name: 'hello_world2.js' }] }]
                    }
                ]
            }
        ]
    },
    {
        name: 'Folder 2',
        children: [{ type: 'file', name: 'hello_Im_in_B.js' }]
    }
];



function App() {
  return (
    <div className="App">
        <MyBrowser initialData={sampleData} expandedFolders={['Folder 1']} />
    </div>
  );
}

export default App;
