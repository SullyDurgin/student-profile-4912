function TagsInput(){
    return (
        <div className="tags-input-container">
            <div className="tag-item">{/* One hardcoded tag for test */}
                <span className="text">hello</span>
                <span className="close">&times;</span>
            </div>
            <input type="text" className="tags-input" placeholder="Type somthing" />
        </div>
    )
}

export default TagsInput