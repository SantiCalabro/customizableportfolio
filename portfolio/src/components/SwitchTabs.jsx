import EditExperience from './EditExperience'
import EditStack from './EditStack'
import EditEducation from './EditEducation'
import EditProjects from './EditProjects'

export default function SwitchTabs({activeTab}) {

  return (
    <div>
      {activeTab === 'Professional Experience' && <EditExperience />}
      {activeTab === 'Stack of Technology' && <EditStack />}
      {activeTab === 'Education' && <EditEducation />}
      {activeTab === 'Projects' && <EditProjects />}  
    </div>
  )
}
