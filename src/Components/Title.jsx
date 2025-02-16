import '../Styles/App.css';
export const  Title = ({name})=> {
    return   (
        <div className="title">
            {name.toUpperCase()}
        </div>
    )
}
