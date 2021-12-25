import React, { useEffect, useState } from 'react'
import UserData from './UserData'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ShareIcon from '@mui/icons-material/Share';

function ProfileCard() {

    const [profileImageUrl, setProfileImageUrl] = useState('')
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [userInfo, setUserInfo] = useState({});
// API Call during intial Mount
    useEffect(() => {
        const payload = { "jobseeker_id": "614b410c2c4b197356a37f18" };
	//Fetch User Data
        fetch('https://api.meetworks.in/users/get_unique_jobseeker_profile', {
	        method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(payload),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(resp => resp.json())
        .then( dataArray => {
		// Parse the data and set Loading to false
            setLoading(false);    
            const data = dataArray[0];    
                    
            setProfileImageUrl(data.user_image_url);       
            const userData = {
                name : data.jobseeker_name,
                location : `${data.area}, ${data.city} ${data.distric}`,
                experience : `${Math.floor(data.total_months_exp / 12)}.${data.total_months_exp % 12} yrs Exp `,
                experienceList : data.user_experiences,
                degree : `${data.user_qualifications[0].course_type} - ${data.user_qualifications[0].course_name}`,
                collegeDetails : `${data.user_qualifications[0].user_college} | ${data.user_qualifications[0].user_passing_year}`
            }
            setUserInfo(userData);

        })
        .catch( error => setFetchError(true)); // Set Error Flag
        
    }, [])

    return (
        <>
         
        {
          loading ? 
            <Typography component="div" variant="h5" style={{fontStyle:'italic', color : '#808080'}} className='centerCard'>
            { fetchError ? "Something Went Wrong" : "Loading ...."}
            </Typography>  
                : 
            <div className='centerCard'>
                <Card sx={{ display: 'flex' }} >
                    <CardMedia
                        component="img"
                        sx={{ width: 250 }}
                        image={profileImageUrl}
                        alt="Live from space album cover"
                    />
                    <CardContent className='content'>
                        {userInfo && <UserData user={userInfo}/>}
                    </CardContent>       
                
                </Card>
                <Button variant="contained"  className='centeredButton' size="medium" startIcon={<ShareIcon />}>Share</Button>
            </div>
            
        }

      </>
    )
}

export default ProfileCard
