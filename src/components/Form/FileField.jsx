function FileField(props) {
  return (
    <div className="form-control">
      <input
        className="form-input block w-full text-base text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main_color cursor-pointer focus:outline-none focus:border-transparent"
        // aria-describedby="user_avatar_help"
        // id="user_avatar"
        type="file"
      />
    </div>
  )
}

export default FileField
