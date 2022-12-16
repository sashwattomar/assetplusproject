import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';
import classes from './DisplayUpload.module.css';
const DisplayUploads = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('http://localhost:8000/api/formdata');
      //   console.log(res);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchImages();
  }, []);

  const fetchedData = data.map((item, key) => {
    return (
      <Fragment>
        <div className='title' key={item.id}>
          {' '}
          {item.title}
        </div>
        <div className='img'>{item.img}</div>
      </Fragment>
    );
  });
  return <div className={classes.container}>{fetchedData}</div>;
};

export default DisplayUploads;
