import React, {useState} from 'react'
import {TabData} from './TabData'
import {Store} from './store'
import {ShowStoreContent} from './ShowStoreContent'

const App: React.FC = () => {
  const [tab, setTab] = useState<'sweet' | 'rad'>('sweet')
  return (
    <Store.Provider><>
      <h1 className='text-2xl text-center m-4'>React hook lazy loading pattern</h1>
      <div className="App mx-auto w-4/5 max-w-md">
        <div className='border-black border-2'>
          <div className="flex flex-1">
            <button 
              className={`flex-auto text-center ${tab === 'sweet' ? 'bg-gray-400' : ''}`}
              onClick={() => setTab('sweet')}
            >tab1 sweet</button>
            <button
              className={`flex-auto text-center ${tab === 'rad' ? 'bg-gray-400' : ''}`}
              onClick={() => setTab('rad')}
            >tab2 rad</button>
          </div>
          <div className='h-56'>
            <TabData tab={tab}/>
          </div>
        </div>
        <h1 className='text-2xl text-center m-4'>👇 Current store contents</h1>
        <ShowStoreContent />
        <p className='my-4 mt-64'>If you don't know how you got here, check out the 
          <a className='text-teal-700' href='https://kurthutten.com/blog/react-hook-lazy-loading-pattern/'> blog post</a> or the
          <a className='text-teal-700' href='https://github.com/Irev-Dev/React-hook-lazy-loading-pattern-demo/tree/master'> source code</a> or the 
          <a className='text-teal-700' href='https://codesandbox.io/s/github/Irev-Dev/React-hook-lazy-loading-pattern-demo/tree/master'> codesandbox</a>
        </p>
      </div>
    </></Store.Provider>
  );
}

export default App;
