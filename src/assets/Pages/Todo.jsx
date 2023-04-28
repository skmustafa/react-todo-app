import { useEffect, useState } from "react";
import { getAll } from "../services/todo";
import PageTop from "../components/PageTop";


const Todo = () => {

    const [data, setdata] = useState()

    useEffect(() => {
        const getList = async () => {
            try {
                const list = await getAll();
                setdata(list)
            }
            catch (error) {
                alert(error.message)
            }
        }
        getList();
    }, [])

    return (
        <>
            <div className="container">
                <PageTop title={'Todo List'} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam, magni qui culpa quas corrupti sit totam fuga? Laboriosam nisi excepturi modi.</p>
                <table className="table  table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data && data.length ?
                                data.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            {
                                                item.completed ?
                                                    <span className="badge text-bg-success">Yes</span> :
                                                    <span className="badge text-bg-danger">No</span>
                                            }
                                        </td>
                                    </tr>) :
                                <tr>
                                    <td colSpan={3} className='text-center text-muted'>No record found</td>
                                </tr>
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Todo