import React from 'react';
import { useInView } from 'react-intersection-observer'

const User = ({firstName, surName, company, who, side, activity, weight, img, history}) => {

  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="col-md-12 g-3 p-0 col-lg-6">
      <div className="border rounded h-100 m-2 bg-body-secondary">
        <div className='d-flex justify-content-between'>
          <div className='p-2 d-flex flex-column'>
            <h5>{firstName} {surName}</h5>
            <p><strong>Стол: </strong>№{company}</p>
            <p><strong>Кто:</strong> {who}</p>
            <p><strong>Сторона: </strong>{side === 1 ? '🤵' : '👰'}</p>
            <p><strong>Активность: </strong>{activity === true ? '💃' : '🙅'}</p>
            <p>
              <strong>Важность: </strong>{weight === 1 ? '❤❤❤' : weight === 2 ? '❤❤🤍' : weight === 3 ? '❤🤍🤍' : null}
            </p>
          </div>

          {
            inView ? (
              <img
                style={{ borderTopRightRadius: '5px'}}
                className="w-50 object-fit-cover "
                src={`http://backend.rakulagin.com${img}`} alt=""
              />
            ) : (
              <div className="w-50"></div>
            )
          }

        </div>
        <div className='p-2'>
          <p><strong>История: </strong>{history ? history : 'Нет'}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
