import { useDispatch, useSelector } from "react-redux"
import { AddToCounter, RemoveToCounter } from "../redux/action";

const Main = () => {
    const result = useSelector((state) => state.counterData)
    console.log("Result", result)
    console.log("Result", result.length)
    const dispatch = useDispatch();
    return (
        <>
            <div style={{
                marginTop: '100px',
                justifyContent: 'center',
                display: 'flex', alignItems: 'center'
            }}><div>
                    <div style={{
                        fontWeight: 600, fontSize: 35, height: '250px',
                        overflow: 'auto'
                    }}>
                        {/* {result.length ? result.length : 0}  */}

                        {result.map((data) => (
                            <div>
                                <span> {data.name} </span>
                                <span> {data.lastname} </span>
                            </div>
                        ))}
                    </div>
                    <br />
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={() => { dispatch(RemoveToCounter()) }} style={{ marginRight: '15px' }}> - </button>
                        <span> Counter  </span>
                        <button onClick={() => { dispatch(AddToCounter({ name: 'Shivam', lastname: 'Rana' })) }} style={{ marginLeft: '15px' }}> + </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Main