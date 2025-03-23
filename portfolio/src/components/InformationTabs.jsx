import { useState } from "react"
import SwitchTabs from "./SwitchTabs"
export default function InformationTabs() {
  const [activeTab, setActiveTab] = useState("Professional Experience")
  const tabs = ['Professional Experience','Stack of Technology', 'Education', 'Projects']
  return (
    <div className="flex flex-col bg-black w-full">
    <div className="bg-dark flex w-full justify-center gap-20 py-2">
    {tabs && tabs.map((tab, index) => (
      <div key={index} className={`font-bold cursor-pointer ${activeTab === tab ? 'mandarine' : 'white'}`} onClick={() => setActiveTab(tab)}>{tab}</div>
    ))}
    </div>
    <SwitchTabs activeTab={activeTab}/>
    </div>
  )
}
