const MessageBox = (props) => {
    return (
        <div className="message-container">
            <div className={`alert alert-${props.variant || 'info'}`} role="alert">
                {props.children}
            </div>
        </div>

    )
}

export default MessageBox;