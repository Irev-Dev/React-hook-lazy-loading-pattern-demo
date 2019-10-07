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
      <p className='my-4'>If you don't know how you got here, check out the blog post or the source code</p>
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
      </div>
      
    </></Store.Provider>
  );
}

export default App;
