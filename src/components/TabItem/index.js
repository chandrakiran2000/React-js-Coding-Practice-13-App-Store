// Write your code here
import './index.css'

const TabItem = props => {
  const {eachList, isActivated, changeActivateTabsid} = props
  const {tabId, displayText} = eachList
  // console.log(isActivated)
  const activateClassName = isActivated ? 'activate' : ''

  const sendingTabId = () => {
    changeActivateTabsid(tabId)
  }

  return (
    <li className="tab-btn-card">
      <button
        onClick={sendingTabId}
        className={`tab-btn ${activateClassName}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
