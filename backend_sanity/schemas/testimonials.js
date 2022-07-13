export default {
name: 'testimonials',
title: 'Testimonials',
type: 'document',
fields: [
    {
     name: 'name', 
     tile: 'Name',
     type: 'string'
    },
    {
        name: 'company', 
        tile: 'Company',
        type: 'string'
    },

    {
        name: 'imageurl', 
        tile: 'ImgURL',
        type: 'image',
        options:{
            hotspot: true,
        }
    },
    {
        name: 'feedback', 
        tile: 'Feedback ',
        type: 'string'
    },

]
}