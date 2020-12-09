import React from 'react';
//'https://api.github.com/repos/ricksnp/fileSelectionWidget/contents/testFolder/
//https://api.github.com/repos/ricksnp/fileSelectionWidget/contents/${filename}?ref=master
import { Table } from 'reactstrap'
import './table.css'
import { useSelector } from 'react-redux';
import { axiosInstance } from '../../util/axiosInstance';
import { useDispatch } from 'react-redux'
import { setContent } from '../../_actions/fileContentActions';
const GitTable = () => {
    const fetchRepos = useSelector(state => state.repos.repos);
    const gitName = useSelector(state => state.gitName.gitName);
    const Dispatch = useDispatch();

    const openFile = async (repoName, filePath) => {
        let resp = await axiosInstance.get(`repos/${gitName}/${repoName}/contents/${filePath}?ref=master`);
        console.log(resp.data);
        const file = {
            file: resp.data.name,
            content: atob(resp.data.content)
        }
        console.log(file)
        Dispatch(setContent(file));

    }

    const openFolder = async (repoName, folderPath) => {
        let resp = await axiosInstance.get(`repos/${gitName}/${repoName}/contents/${folderPath}`);
        let masterString = `<Table><thead><tr><th class = 'folderHead'>${'Directory: ' + folderPath}</th></tr></thead><tbody>`;
        let dirs = [];
        let files = [];
        for (let r = 0; r < resp.data.length; r++) {
            const sub = {
                name: resp.data[r].name,
                type: resp.data[r].type.replace(" ", "%20"),
                path: resp.data[r].path.replace(" ", "%20")
            }
            if (sub.type === 'dir') {
                //masterString += `<tr><td id = ${repoName+sub.path}   ><p onClick={(event)=>${openFolder( repoName, sub.path)}}>${sub.name}</p></td></tr>`
                masterString += `<tr><td className='dir' id = ${repoName + sub.path} fileRepo = ${repoName} filetype='dir' fileName = ${sub.name} filePath = ${sub.path}> <p>${sub.name}</p></td></tr>`
                dirs.push(repoName + sub.path);
            }
            else {
                masterString += `<tr><td className='file' id = ${repoName + sub.path} fileRepo = ${repoName} filetype='file' fileName = ${sub.name} filePath = ${sub.path}><p>${sub.name}</p></td></tr>`
                files.push(repoName + sub.path);
            }
        }
        masterString += '</tbody></Table>';
        document.getElementById(repoName + folderPath).innerHTML = (
            masterString
        );
        for (const dir of dirs) {
            let currentElement = document.getElementById(dir);
            currentElement.addEventListener('click', function (e) {
                e.stopPropagation();
                openFolder(currentElement.getAttribute("fileRepo"), currentElement.getAttribute("filePath"));
            })
        }
        for (const file of files) {
            let currentElement = document.getElementById(file);
            currentElement.addEventListener('click', function (e) {
                e.stopPropagation();
                openFile(currentElement.getAttribute("fileRepo"), currentElement.getAttribute("filePath"));
            })
        }



    }



    //{e.stopPropagation(); openFolder(repoName, sub.name)}
    const openRepo = async (repoName) => {

        let resp = await axiosInstance.get(`repos/${gitName}/${repoName}/contents`);
        let masterString = `<Table><thead><tr><th class = 'folderHead'>${'Directory: ' + repoName}</th></tr></thead><tbody>`;
        let dirs = [];
        let files = [];
        for (let r = 0; r < resp.data.length; r++) {
            const sub = {
                name: resp.data[r].name,
                type: resp.data[r].type.replace(" ", "%20"),
                path: resp.data[r].path.replace(" ", "%20")
            }
            if (sub.type === 'dir') {
                //masterString += `<tr><td id = ${repoName+sub.path} > <p onClick={(event)=>${openFolder( repoName, sub.path)}}>${sub.name}</p></td></tr>`
                masterString += `<tr><td className='dir' id = ${repoName + sub.path} fileRepo = ${repoName} filetype='dir' fileName = ${sub.name} filePath = ${sub.path}> <p>${sub.name}</p></td></tr>`
                dirs.push(repoName + sub.path);
            }
            else {
                masterString += `<tr><td className='dir' id = ${repoName + sub.path} fileRepo = ${repoName} filetype='file' fileName = ${sub.name} filePath = ${sub.path}>${sub.name}</td></tr>`
                files.push(repoName + sub.path);
            }
        }
        masterString += '</tbody></Table>';

        document.getElementById(repoName).innerHTML = (
            masterString
        );
        for (const dir of dirs) {
            let currentElement = document.getElementById(dir);
            currentElement.addEventListener('click', function (e) {
                e.stopPropagation();
                openFolder(currentElement.getAttribute("fileRepo"), currentElement.getAttribute("filePath"));
            })
        }
        for (const file of files) {
            let currentElement = document.getElementById(file);
            currentElement.addEventListener('click', function (e) {
                e.stopPropagation();
                openFile(currentElement.getAttribute("fileRepo"), currentElement.getAttribute("filePath"));
            })
        }
    }


    return (
        <Table hover striped bordered className="mt-5 table-primary" id="repoTable" >
            <thead>
                <tr>
                    <th>Repositories</th>
                </tr>
            </thead>
            <tbody>
                {fetchRepos.map((repo, index) => (<tr key={index}><td id={repo.name} ><p onClick={(e) => { openRepo(repo.name) }}> {(repo.name)} </p></td></tr>))}
            </tbody>
        </Table>
    );

}
export default GitTable