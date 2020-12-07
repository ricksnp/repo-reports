import React from 'react';
//'https://api.github.com/repos/ricksnp/fileSelectionWidget/contents/testFolder/
//https://api.github.com/repos/ricksnp/fileSelectionWidget/contents/${filename}?ref=master
import {Table} from 'reactstrap'
import './table.css'
const GitTable = () => {
    
    return(
      <Table hover striped bordered className="mt-5 table-primary" id="repoTable" >
        <thead>
            <tr>
                <th>Repositories</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                  <td>1</td>
              </tr>
              <tr>
                  <td>2</td>
              </tr>
        </tbody>
      </Table>  
    );

}
export default  GitTable