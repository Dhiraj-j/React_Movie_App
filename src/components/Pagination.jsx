import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { pageContext } from '../Pages/HomeScreen';

function PaginationComp() {
    const {page , setPage} = useContext(pageContext);
    const nextPage = () =>{
        setPage(page + 1);
    }

    const prevPage = () =>{
        setPage(page - 1);
    }
    return (
        <Pagination style={{display:'flex', justifyContent:'center',
        margin: '10px'}}>
        <Pagination.Prev 
        disabled={page === 1 ? true : false}
        onClick={prevPage}
        />
        <Pagination.Item disabled={false} >{page}</Pagination.Item>
        <Pagination.Item disabled={true}>{page+1}</Pagination.Item>
        <Pagination.Item disabled={true}>{page+2}</Pagination.Item>
        
        <Pagination.Next onClick={nextPage}/>
        </Pagination>
    );
}

export default PaginationComp;