import { Paper,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useDispatch,useSelector } from "react-redux"
import moment from 'moment';
import { useEffect } from "react";
import { setMainCategories } from "../../../store/mainCategorySlice";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export function MainCategoriesList() {
    const mainCategories = useSelector(store => store.mainCategories)
    const dispatch = useDispatch();
    useEffect(()=>{
        //API Call
        axios.get('http://localhost:3001/categories')
          .then (function(response){
            //handle success
            console.log("Categories Response",response.data)
            const data = response.data;
            dispatch(setMainCategories(data))
          })
          .catch(function(error){
            console.log("there is erorr",error)
          })
          .finally(function(){
            
          })

    },[])
    const navigate = useNavigate();
    return <div>
        <Button variant="contained" onClick={()=>{
            navigate('create')
        }}>Add Categories</Button>
        <br></br>   
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell >Created At</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mainCategories.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.description}</TableCell>
                            <TableCell>{moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                            <TableCell><div>Actions</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}