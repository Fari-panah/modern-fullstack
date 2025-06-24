const Filter = (props) => {
        const {value, onChange} = props
        return(
            <>
             <div>input shown with<input value={value} onChange={onChange} /></div>
            </>
        )

}

   

export default Filter