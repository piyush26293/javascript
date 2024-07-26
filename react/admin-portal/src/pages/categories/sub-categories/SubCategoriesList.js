import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import moment from 'moment';
import axios from 'axios';
import { useEffect } from "react";
import { setSubCategories } from "../../../store/subCategorySlice";


export function SubCategoriesList() {
    const dispatch = useDispatch();
    const mainCategories = useSelector(store => store.mainCategories)
    const mapping = mainCategories.reduce((mapp, category)=>{
        mapp[category.id] = category.name
        return mapp;
    }, {})
    const subCategoriesData = useSelector(store => store.subCategories)
    const subCategories = subCategoriesData.map(subCategory=> {
        return { ...subCategory, mainCategory: mapping[subCategory.categoryId]}
    })

    
   
    useEffect(()=>{
        //API Call
        axios.get('http://localhost:3001/subCategories')
          .then (function(response){
            //handle success
            console.log("Categories Response",response.data)
            const data = response.data;
            dispatch(setSubCategories(data))
          })
          .catch(function(error){
            console.log("there is erorr",error)
          })
          .finally(function(){
            
          })
          
    },[])

    return <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Main Category</TableCell>
                        <TableCell>Total Items</TableCell>
                        <TableCell >Created At</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subCategories.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                               <img src={row.imageUrl} width={40} height={40}></img> {row.name}
                            </TableCell>
                            <TableCell >{row.mainCategory}</TableCell>
                            <TableCell >{row.totalItems}</TableCell>
                            <TableCell>{moment(row.createdAt).format('DD MMM YYYY')}</TableCell>
                            <TableCell><div>Actions</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}