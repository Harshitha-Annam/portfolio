import React from 'react'
import {ShieldCheck, MoveUpRight} from 'lucide-react';
const Certifications = () => {
  return (
    <section className='container certifications-section'>
      <div className='section-header certifiations-header'>
        <div className="section-icon">
          <ShieldCheck/>
        </div>
        <h3 className="section-title">Certifications</h3>
      </div>
      <div className='certifications'>
        <table rules='rows' >
            <tbody>
                <tr>
                    <td>Certification in ML, IoT, CV & SAP ABAP(SAP)</td>
                    <td id='issuedby'><a href='https://drive.google.com/file/d/1EFTv0juU6r_CEx7Uykocm3wBtz1_NclQ/view?usp=sharing' target='_blank'><MoveUpRight/></a></td>
                    
                </tr>
                <tr>
                    <td>Data Analytics Essentials(Cisco Networking Academy)</td>
                    <td  id='issuedby'><a href='https://drive.google.com/file/d/13K8j_6C4OIkxDkGWqHQ2kKfwCmZQdNMB/view?usp=sharing' target='_blank'><MoveUpRight/></a></td>
                    
                </tr>
                <tr>
                    <td>Open Source Contributor(GSSoC Extd.2024)</td>
                    <td  id='issuedby'><a href='https://drive.google.com/file/d/1HG4_haOFNgN5nJKN42cJAwI5wfLwEHD8/view?usp=sharing' target='_blank'><MoveUpRight/></a></td>
                    
                </tr>
                <tr>
                    <td>Postman Fundamentals Student Expert(Postman)</td>
                    <td  id='issuedby'><a href='https://drive.google.com/file/d/1nvNkv85KZqEvmZDewD655TCHKWdQl6rN/view?usp=sharing' target='_blank'><MoveUpRight/></a></td>
                    
                </tr>
                
            </tbody>
        </table>
      </div>
    </section>
  )
}

export default Certifications;
