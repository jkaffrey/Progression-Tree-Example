import logo from './logo.svg';
import './App.css';
import ProgressionTree from './components/ProgressionTree/ProgressionTree';

const data = [
  {
    id: 'header-1',
    content: 'Header 1',
    hasBeenSelected: false,
    children: [
      {
        id: 'child-a',
        content: 'Child A',
        hasBeenSelected: false,
        children: [
          {
            id: 'child-a-a',
            content: 'Child A - A',
            hasBeenSelected: false
          }
        ]
      },
      {
        id: 'child-b',
        content: 'Child B',
        hasBeenSelected: false,
        children: [
          {
            id: 'child-b-a',
            content: 'Child B - A',
            hasBeenSelected: false
          },
          {
            id: 'child-b-b',
            content: 'Child B - B',
            hasBeenSelected: false
          }
        ]
      },
      {
        id: 'child-c',
        content: 'Child C',
        hasBeenSelected: false,
        children: [
          {
            id: 'child-c-a',
            content: 'Child C - A',
            hasBeenSelected: false
          },
          {
            id: 'child-c-b',
            content: 'Child C - B',
            hasBeenSelected: false
          },
          {
            id: 'child-c-c',
            content: 'Child C - C',
            hasBeenSelected: false
          }
        ]
      }
    ]
  }
]

function App() {
  return (
      <ProgressionTree data={data} format={'linear'} title={<h2>Testing This</h2>} />
  );
}

export default App;
