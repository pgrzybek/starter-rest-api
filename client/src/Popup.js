

export default function Popup(props){


return (props.trigger)? (
<div className="popup">
    <div className="popupContents">
        <div className="popupPrompt">
            <span>Do you want to permanently delete this post?</span>
        </div>
        <div className="popupResponse">
            <button className="reject" onClick={props.handleReject}><strong>No</strong>, keep post!</button>
            <button className="confirm danger" onClick={props.handleConfirm}
            ><strong>Yes</strong>, delete post!</button>
            
        </div>
    </div>
</div>
):('')
}