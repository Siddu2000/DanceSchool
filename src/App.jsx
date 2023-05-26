import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import HomePage from './pages/HomePage';
import PublicRoute from './routes/PublicRoute';
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './AdminDashBoard/AdminRegister';
import AdminDashboard from './AdminDashBoard/AdminDashboard';
import AcademyManagerRegister from './AcademyManager/AcademyManagerRegister';
import ViewAcademicManager from './AdminDashBoard/ViewAcademicManager';
import PrivateRoute from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';
import ManagerDetails from './AcademyManager/ManagerDetails';
import EditAcademicManager from './AcademyManager/EditAcademicManager';
import ViewAcademyDashBoard from './Academy/ViewAcademyDashBoard';
import AcademyDetails from './Academy/AcademyDetails';
import EditAcademy from './Academy/EditAcademy';
import BranchDetails from './Branch/BranchDetails';
import CourseDetails from './course/CourseDetails';
import EditBranch from './Branch/EditBranch';
import EditCourse from './course/EditCourse';
import Events from './pages/Events';
import BranchDashBoard from './Branch/BranchDashBoard';
import CourseDashBoard from './course/CourseDashBoard';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route path="*" element={"page not found"} /> */}
                    <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                    <Route path='/events' element={<PrivateRoute><Events/></PrivateRoute>} />
                    <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path='login/register' element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path='/Admin' element={<AdminLogin />} />
                    <Route path='/adminRegister' element={<AdminRegister />} />
                    
                    {/* admin dash board */}
                    <Route path='/adminDashBoard' element={<AdminDashboard />}>
                        {/* academy manager */}
                        <Route path='academyManagerRegister' element={<AdminRoute><AcademyManagerRegister /></AdminRoute>} />
                        <Route path='viewAcademyManager' element={<AdminRoute><ViewAcademicManager /></AdminRoute>} />
                        <Route path='managerDetails/:id' element={<AdminRoute><ManagerDetails/></AdminRoute>} />
                        <Route path='managerDetails/update/:id' element={<AdminRoute><EditAcademicManager/></AdminRoute>} />
                        {/* view academy */}
                        <Route path='viewAcademyDashBoard' element={<AdminRoute><ViewAcademyDashBoard/></AdminRoute>} />
                        <Route path='academyDetails/update/:id' element={<AdminRoute><AcademyDetails/></AdminRoute>} />
                        <Route path='addAcademy/:id' element={<AdminRoute><EditAcademy/></AdminRoute>} />
                        <Route path="academyDetails/:id" element={<AdminRoute><AcademyDetails/></AdminRoute>}/>
                        {/* view branch */}
                        <Route path='branchDetails' element={<AdminRoute><BranchDetails/></AdminRoute>} />
                        <Route path='addBranch/:id' element={<AdminRoute><EditBranch/></AdminRoute>} />
                        <Route path='branchDetails/update/:id' element={<AdminRoute><BranchDashBoard/></AdminRoute>} />
                        {/* view course */}
                        <Route path='courseDetails' element={<AdminRoute><CourseDetails/></AdminRoute>} />
                        <Route path='courseDetails/update/:id' element={<AdminRoute><CourseDashBoard/></AdminRoute>} />
                        <Route path='addCourse/:id'  element={<AdminRoute><EditCourse/></AdminRoute>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}


export default App