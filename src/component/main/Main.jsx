import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Typography,Grid,Card,CardActionArea, CardMedia, CardContent, CardActions,Button } from '@mui/material';
const Main = () => {
const [data,setData]= useState(); 
const navigate = useNavigate();
    const api = ()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        axios(url).then(data=>setData(data.data)).catch(error=> console.log(error))
    }
    useEffect(()=>{
        api()
    },[])
  return (
    <>
     <Typography variant="h4" color="error" align="center" mt={4} mb={4}>
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data?.map((card) => {
          const {  company,name,website } = card;
          return (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={`https://avatars.dicebear.com/v2/avataaars/${card.id}.svg`} alt="img" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
               
                     <b>company: <span>{company.name}</span> </b> 
                    
                    <Typography gutterBottom variant="h5" component="div">
                     <a href={website}>website</a> 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=> navigate(`${card.id}`, {state:card})}>
                    Todo List
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  )
}

export default Main