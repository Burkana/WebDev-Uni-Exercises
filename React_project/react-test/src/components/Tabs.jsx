function Tabs(props){
return (
    <>
    <props.buttonConteiner>
     {props.buttons}
    </props.buttonConteiner>
    {props.children}
    </>
);
}
export default Tabs;
