import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function ReportTable(props) {
  //const [Sum,SetSum]= useState(0);
  function SumTotal() {

    sum = sum + totalTotal;
  }
  const [ReportArray, SetReportArray] = useState([]);
  let total1 = 0;
  let total2 = 0;
  let total3 = 0;
  let total4 = 0;
  let total5 = 0;
  let total6 = 0;
  let total7 = 0;
  let total8 = 0;
  let total9 = 0;
  let total10 = 0;
  let total11 = 0;
  let total12 = 0;
  let total13 = 0;
  let total14 = 0;
  let totalTotal = 0;
  let sum = 0;
  useEffect(() => {
    axios.get("https://cookie-stand20231007094403.azurewebsites.net/api/CookieStands")
      .then(respons => {
        SetReportArray(respons.data);
      })
      .catch(err => {
      })
      ;


  }, [props.count]);

  async function Delete(id) {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${props.Token}`
    //   }
    // }
    await axios.delete(`https://cookie-stand20231007094403.azurewebsites.net/api/CookieStand/${id}`);
      // .then(respons => {
      //   console.log(respons.data);
      //   props.UpdateCount(1);
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      
    
  }
  return (
    <>

      <table className=' table-bordered'>
        <thead>
          <tr className="table-success">
            <th>Location</th>
            <th>6:00 am</th>
            <th>7:00 am</th>
            <th>8:00 am</th>
            <th>9:00 am</th>
            <th>10:00 am</th>
            <th>11:00 am</th>
            <th>12:00 pm</th>
            <th>1:00 pm</th>
            <th>2:00 pm</th>
            <th>3:00 pm</th>
            <th>4:00 pm</th>
            <th>5:00 pm</th>
            <th>6:00 pm</th>
            <th>7:00 pm</th>
            <th>Total</th>

          </tr>
        </thead>
        <tbody>

          {ReportArray.map(item => {
            return (
              <tr key={item.cookieStandId} className="table-success">
                <td>{item.location}
                  <button type="button" class="btn btn-danger" onClick={() => Delete(item.cookieStandId)}>Delete</button>

                </td>

                {item.hourly_sales.map((val, index) => {
                  return (<td Key={index}>{val}</td>)
                })}
                <td onChange={() => { SumTotal() }}>{totalTotal = item.hourly_sales.map((number) => number).reduce((a, b) => a + b, 0)}
                </td>

              </tr>

            )

          })

          }
          <tr className='table-success'>
            <td>Total</td>
            {ReportArray.forEach(element => {
              total1 = total1 + element.hourly_sales[0];
              total2 = total2 + element.hourly_sales[1];
              total3 = total3 + element.hourly_sales[2];
              total4 = total4 + element.hourly_sales[3];
              total5 = total5 + element.hourly_sales[4];
              total6 = total6 + element.hourly_sales[5];
              total7 = total7 + element.hourly_sales[6];
              total8 = total8 + element.hourly_sales[7];
              total9 = total9 + element.hourly_sales[8];
              total10 = total10 + element.hourly_sales[9];
              total11 = total11 + element.hourly_sales[10];
              total12 = total12 + element.hourly_sales[11];
              total13 = total13 + element.hourly_sales[12];
              total14 = total14 + element.hourly_sales[13];

            })}
            <td>{total1}</td>
            <td>{total2}</td>
            <td>{total3}</td>
            <td>{total4}</td>
            <td>{total5}</td>
            <td>{total6}</td>
            <td>{total7}</td>
            <td>{total8}</td>
            <td>{total9}</td>
            <td>{total10}</td>
            <td>{total11}</td>
            <td>{total12}</td>
            <td>{total13}</td>
            <td>{total14}</td>
            <td>{sum}</td>
          </tr>

        </tbody>
      </table>
    </>
  );
}