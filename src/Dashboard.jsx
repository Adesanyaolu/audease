import { Avatar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";



function Dashboard() {

    return (
        <div className="dashboard  flex flex-row justify-center m-auto max-w-[1440px]">
            {/* Left side  */}
            <div className="left w-[17%] border-r-2 border-r-borderColor container">
                {/* section one  */}
                <div className="flex flex-row py-8 px-4 justify-around">
                    <div className="w-16">
                        <img src="/audease_logo.png" alt="audease logo" />
                    </div>
                    <div>
                        <Link to="/"> <h2 className="font-semibold text-bigTextb ">Eden College</h2> </Link>
                    </div>
                    <div className="w-6">
                        <img src="/arrow.svg" alt="" />
                    </div>
                </div>
                {/* line break  */}
                <hr className="text-borderColor h-2" />
                {/* section two  */}
                <div className="pl-4 py-4">
                    {/* Home */}
                    <div className="flex flex-row bg-activeIconColor p-4">
                        <div >
                            <img src="/home.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pl-4 pt-2 font-semibold text-base">Home</h3>
                        </div>
                    </div>
                    {/* Messages  */}
                    <div className="flex flex-row p-4">
                        <div >
                            <img src="/message.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pl-4 pt-2 font-semibold text-iconColor">Messages</h3>
                        </div>
                    </div>
                    {/* Tasks  */}
                    <div className="flex flex-row p-4">
                        <div >
                            <img src="/task.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pl-4 pt-2 font-semibold text-iconColor">Tasks</h3>
                        </div>
                    </div>
                    {/* Staff  */}
                    <div className="flex flex-row p-4">
                        <div >
                            <img src="/profile-user.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pl-4 pt-2 font-semibold text-iconColor">Staffs</h3>
                        </div>
                    </div>
                    {/* Settings  */}
                    <div className="flex flex-row p-4">
                        <div >
                            <img src="/setting.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pl-4 pt-2 font-semibold text-iconColor">Settings</h3>
                        </div>
                    </div>
                    {/* line break  */}
                    <hr className="text-borderColor h-2 mr-2" />
                </div>
                {/* Section three  */}
                <div className="py-2 px-10">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h3 className="text-iconColor font-bold text-tem">STAGES</h3>
                        </div>
                        <div>
                            <img src="/add-square.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <ul className="list-none py-4 text-iconText text-iconColor font-medium">
                            <li className="py-2 mb-2 flex items-center">
                                <span className="w-2 h-2 mr-2 rounded-full bg-bulletGreen"></span>
                                Application/ BKSB
                            </li>
                            <li className="py-2 mb-2 flex items-center">
                                <span className="w-2 h-2 mr-2 rounded-full bg-bulletYellow"></span>
                                Confirming Funding
                            </li>
                            <li className="py-2 mb-2 flex items-center">
                                <span className="w-2 h-2 mr-2 rounded-full bg-bulletGrey"></span>
                                Induction</li>
                            <li className="py-2 mb-2 flex items-center">
                                <span className="w-2 h-2 mr-2 rounded-full bg-bulletBlue"></span>
                                Register for laser</li>
                        </ul>
                    </div>
                </div>
                {/* section four  */}
                <div className="px-10">
                    <div className="relative flex flex-row leftCard mr-6">
                        <div className="text-center w-[16rem] mt-[7rem]">
                            <h3 className="text-breaksm font-medium">Thoughts Time</h3>
                            <p className="text-tem font-normal text-iconColor p-4">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                            <input type="text" className="bg-white w-4/5 rounded p-2 text-center text-breaksm font-medium text-textBlack placeholder-text-textBlack" placeholder="Write a message" />
                        </div>
                        <div className="absolute flex items-center justify-center h-16 w-16 left-[5.5rem] top-5  flex-row">
                            <div>
                                <img src="/ellipse.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
                                <img src="/lamp-on.png" alt="Foreground Image" className="absolute inset-0 left-[15px] top-[20px] object-cover w-1/2 h-1/2" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Right side  */}
            <div className="right w-[65%] ">
                {/* First section  */}
                <div className="flex flex-row justify-between mx-12 my-4">
                    {/* Search bar */}
                    <div className='relative'>
                        <input type="text" placeholder="Search for anything..." className="pl-10 pr-4 py-4 border-none rounded-lg w-80 focus:outline-none focus:border-blue-500 bg-cardbg" />
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <img src="/search.png" alt="Search Icon" className="w-5 h-5" />
                        </span>
                    </div>
                    {/* profile section */}
                    <div className="flex flex-row">
                        {/* icons  */}
                        <div className="flex flex-row pr-4 pt-2">
                            <div>
                                <img src="/calendar-2.png" alt="claendar" className="px-2" />
                            </div>
                            <div>
                                <img src="/message-question.png" alt="message question" className="px-2" />
                            </div>
                            <div>
                                <img src="/notification.png" alt="notification" className="px-2" />
                            </div>
                        </div>
                        {/* user  */}
                        <div className='flex flex-row'>
                            {/* User info */}
                            <div className="grid font-normal px-4">
                                <h3 className=" text-iconText text-textBlue">Nyekachi Wihioka</h3>
                                <p className="justify-self-end text-breaksm text-iconColor">Admin</p>
                            </div>
                            {/* User avatar and drop down */}
                            <div >
                                {/* Avatar  */}
                                <div className="flex flex-wrap gap-2">
                                    <Avatar img="/kachi.png" alt="avatar of User" rounded />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* line break  */}
                <hr className="text-borderColor h-2" />

                {/* Second section  */}
                <div className='flex flex-row justify-between mx-12 mt-8 mb-2'>
                    {/* Overview */}
                    <div className='flex flex-row space-x-8'>
                        {/* text  */}
                        <div>
                            <h4 className='font-medium text-bigTexta text-textBlue'>Overview</h4>
                        </div>
                        {/* icons  */}
                        <div className='flex flex-row space-x-4 py-2'>
                            <img src="/icon-pen.png" alt="" />
                            <img src="/icon626.png" alt="" />
                        </div>
                    </div>
                    {/* Avatar groups */}
                    <div className='flex flex-row'>
                        {/* Invite  */}
                        <div className='flex flex-row space-x-2 py-2 px-4'>
                            {/* icon  */}
                            <div>
                                <img src="/addicon.png" alt="" />
                            </div>
                            {/* text */}
                            <div>
                                <p className='text-iconOrange font-medium text-iconText'>Invite</p>
                            </div>
                        </div>
                        {/* Avatars  */}
                        <div>
                            <Avatar.Group>
                                <Avatar img="/kachi.png" rounded />
                                <Avatar img="/kachi.png" rounded />
                                <Avatar img="/kachi.png" rounded />
                                <Avatar img="/kachi.png" rounded />
                                <Avatar.Counter total={2} href="#" className='bg-avatarBg text-avatarBgDeep' />
                            </Avatar.Group>
                        </div>
                    </div>
                </div>

                {/* Third Section  */}
                <div className='flex flex-row justify-between mx-12 my-8'>
                    {/* dropdown buttons  */}
                    <div className='flex flex-row space-x-4'>
                        <div className='text-iconText text-iconColor'>
                            <Dropdown label={<>
                                <img src="/task.png" alt="" className="w-6 h-6 mr-2" /> Filter
                            </>}>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className='text-iconText text-iconColor'>
                            <Dropdown label={<>
                                <img src="/calendar-2.png" alt="" className="w-6 h-6 mr-2" /> Today
                            </>}>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    {/* other buttons */}
                    <div className='flex flex-row space-x-3'>
                        <div>
                            <Button className='text-iconText text-iconColor '>
                                <img src='/profile-user.png' className="mr-2 h-5 w-5" />
                                Buy now
                            </Button>
                        </div>
                        <div className='border-r-2 border-iconColor h-3/5 my-2'>

                        </div>

                        <img src="/yellowIcon.png" alt="" className='w-[2rem] h-[2rem] my-2' />

                        <div className='py-2'>
                            <img src="/home.png" alt="" className='w-3/4' />
                        </div>
                    </div>
                </div>

                {/* Fourth section - cards  */}
                <div className='flex flex-row  my-12 mx-10 justify-center gap-12 '>
                    {/* Big Card 1  */}
                    <div className='bg-cardbg w-[25rem] rounded-2xl p-4'>
                        {/* to do  */}
                        <div className='flex flex-row space-x-4'>
                            <li className="py-2 mb-2 flex items-center font-medium text-iconText">
                                <span className="w-2 h-2 mr-2 rounded-full bg-cardBulletBlue"></span>
                                To Do
                            </li>
                            <div className="w-6 h-6 mt-2 rounded-full bg-cardNumberBg text-cardNumberText text-center text-tem p-1 font-medium">4</div>
                        </div>
                        {/* line break  */}
                        <hr className="text-cardBulletBlue h-8" />
                        {/* Small cards    1 */}
                        <div className='grid space-y-8'>
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='w-9 h-6 bg-priorityBgColor rounded-2xl'>
                                        <p className='text-tem text-priorityTextColor font-medium text-center py-1 '>Low</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Brainstorming</h5>
                                    <p className='font-normal text-tem text-iconColor'>Brainstorming brings team members diverse experience into play. </p>
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>12 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>0 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            {/* Small cards    2 */}
                            <div className='border-dotted border-2 border-cardBulletBlue rounded-lg'>
                                <Card href="#" className=" bg-bg-white border-none origin-center rotate-2">
                                    {/* first div  */}
                                    <div className='flex flex-row justify-between'>
                                        <div className='w-9 h-6 bg-hightPriorityLight rounded-2xl'>
                                            <p className='text-tem text-hightPriorityDark font-medium text-center py-1 '>High</p>
                                        </div>
                                        <div>
                                            <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                        </div>
                                    </div>
                                    {/* Second div  */}
                                    <div>
                                        <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Research</h5>
                                        <p className='font-normal text-tem text-iconColor'>User research helps you to create an optimal product for users. </p>
                                    </div>
                                    {/* Third div */}
                                    <div className='flex flex-row justify-between'>
                                        {/* avatar  */}
                                        <div>
                                            <Avatar.Group className='gap-2'>
                                                <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                                <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            </Avatar.Group>
                                        </div>
                                        <div className='flex flex-row space-x-2 py-2'>
                                            <div className='flex flex-row space-x-1 text-iconColor'>
                                                <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                                <p className='text-tem'>10 comments</p>
                                            </div>
                                            <div className='flex flex-row space-x-1 text-iconColor'>
                                                <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                                <p className='text-tem'>3 files</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            {/* Small cards    3 */}
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='w-9 h-6 bg-hightPriorityLight rounded-2xl'>
                                        <p className='text-tem text-hightPriorityDark font-medium text-center py-1 '>High</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Wireframes</h5>
                                    <p className='font-normal text-tem text-iconColor'>Low fidelity wireframes include the most basic content and visuals. </p>
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>2 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>0 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* Big Card 2  */}
                    <div className='bg-cardbg w-[25rem] rounded-2xl p-4'>
                        {/* to do  */}
                        <div className='flex flex-row space-x-4'>
                            <li className="py-2 mb-2 flex items-center font-medium text-iconText">
                                <span className="w-2 h-2 mr-2 rounded-full bg-bulletYellow"></span>
                                On Progress
                            </li>
                            <div className="w-6 h-6 mt-2 rounded-full bg-cardNumberBg text-cardNumberText text-center text-tem p-1 font-medium">3</div>
                        </div>
                        {/* line break  */}
                        <hr className="text-bulletYellow h-8" />
                        {/* Small cards */}
                        <div className='space-y-8'>
                            {/* Small cards 1*/}
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='w-9 h-6 bg-priorityBgColor rounded-2xl'>
                                        <p className='text-tem text-priorityTextColor font-medium text-center py-1 '>Low</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Onboarding Illustrations</h5>
                                    <img src="/card-image1.png" alt="" className='py-4' />
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>14 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>5 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            {/* Small cards 2*/}
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='w-9 h-6 bg-priorityBgColor rounded-2xl'>
                                        <p className='text-tem text-priorityTextColor font-medium text-center py-1 '>Low</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Moodboard</h5>
                                    <div className='flex flex-row space-x-4 overflow-hidden'>
                                        <img src="/card-image2.png" alt="" className='py-4 max-h-full w-1/2' />
                                        <img src="/card-image3.png" alt="" className='py-4 max-h-full w-1/2' />
                                    </div>
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />

                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>9 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>10 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* Big card 3  */}
                    <div className='bg-cardbg w-[25rem] rounded-2xl p-4'>
                        {/* to do  */}
                        <div className='flex flex-row space-x-4'>
                            <li className="py-2 mb-2 flex items-center font-medium text-iconText">
                                <span className="w-2 h-2 mr-2 rounded-full bg-cardBulletGreen"></span>
                                Done
                            </li>
                            <div className="w-6 h-6 mt-2 rounded-full bg-cardNumberBg text-cardNumberText text-center text-tem p-1 font-medium">2</div>
                        </div>
                        {/* line break  */}
                        <hr className="text-cardBulletGreen h-8" />
                        {/* Small cards */}
                        <div className='space-y-8'>
                            {/* Small cards 1*/}
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='px-2 h-6 bg-completedLight rounded-2xl'>
                                        <p className='text-tem text-completedDark font-medium text-center py-1 '>Completed</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Mobile App Design</h5>
                                    <img src="/card-image4.png" alt="" className='py-4' />
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />

                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>12 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>15 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            {/* Small cards 2*/}
                            <Card href="#" className=" bg-bg-white border-none">
                                {/* first div  */}
                                <div className='flex flex-row justify-between'>
                                    <div className='px-2 h-6 bg-completedLight rounded-2xl'>
                                        <p className='text-tem text-completedDark font-medium text-center py-1 '>Completed</p>
                                    </div>
                                    <div>
                                        <p className='font-extrBold text-iconText text-textBlue'>...</p>
                                    </div>
                                </div>
                                {/* Second div  */}
                                <div>
                                    <h5 className='font-semibold text-bigTextb text-textBlue py-1'>Mobile App Design</h5>
                                    <p className='font-normal text-tem text-iconColor'>It just needs to adapt the UI from what you did before </p>
                                </div>
                                {/* Third div */}
                                <div className='flex flex-row justify-between'>
                                    {/* avatar  */}
                                    <div>
                                        <Avatar.Group className='gap-2'>
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />
                                            <Avatar img="/kachi.png" alt="avatar of User" rounded size='xs' />

                                        </Avatar.Group>
                                    </div>
                                    <div className='flex flex-row space-x-2 py-2'>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/comments.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>12 comments</p>
                                        </div>
                                        <div className='flex flex-row space-x-1 text-iconColor'>
                                            <img src="/files.png" alt="" className='w-[12px] h-[12px]' />
                                            <p className='text-tem'>15 files</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
