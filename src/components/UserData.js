import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';

function UserData({user}) {

    const {name, location, experience, experienceList, degree, collegeDetails} = user;

     let experienceDivElement = []

     if(experienceList && experienceList.length > 0){
        experienceDivElement = experienceList.map((exp,index) => {            
            return exp.company_name && (
                <div className='flexDiv' key={index}>
                    { exp.company_logo ? <img src={exp.company_logo}/> :  <div style={{padding : '1.7em'}}></div>}                
                    <div>
                        <p><span className='firstElement'>{exp.user_post}</span></p>
                        <p>{exp.company_name}</p>
                        <p style={{fontSize : 'small', color : '#808080'}}>{`${exp.company_starting_date} - ${exp.company_ending_date} `}</p>
                        <p className='roleDesc'>{exp.role_discription}</p>
                    </div>
                </div>
            )
        });
     }
     
     
    return (
        <>
           <div> 
               <span className='firstElement'>{name}</span>  | <LocationOnIcon fontSize='small' color="primary" /><span style={{fontSize : 'small'}}>{location}</span>
            </div>
            <div> 
                <Button  startIcon={<BusinessCenterIcon />}>
                     EXPERIENCE
                </Button>
                <Chip label={experience} variant="contained" color="primary" fontSize='small' style={{padding : '0', height : '18px', color:'white'}}/>
                {experienceDivElement.length && experienceDivElement}
                       
            </div>
            <div> 
                <Button  startIcon={<SchoolIcon />}>
                  EDUCATION
                </Button>
                <div className='flexDiv'>
                    <div style={{padding : '1.7em'}}>

                    </div>
                    <div>
                        <p><span className='firstElement'>{degree}</span></p>
                        <p><span>{collegeDetails}</span></p>
                    </div>
                </div>
                        
                        
            </div> 
        </>
    )
}

export default UserData
