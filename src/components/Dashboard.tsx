import React from 'react'
import logo from '../assets/logo.svg'

export const Dashboard: React.FC = () => {
    return <aside>

        <div className="aside">

            <div className="logo">
                <img src={logo} alt="logo" />
                <h3 className="logo_title">BankDash.</h3>
            </div>

            <nav>
                <ul>

                    <li>
                        <div className="image">
                            <svg className='image-svg' width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_725)">
                                    <path d="M24.3254 10.8738C24.3249 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4984 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678134 10.8667C0.674701 10.8702 0.671267 10.8738 0.667834 10.8772C-0.224805 11.775 -0.223279 13.2317 0.672221 14.1272C1.08135 14.5365 1.6217 14.7736 2.19943 14.7984C2.2229 14.8006 2.24655 14.8018 2.27039 14.8018H2.67684V22.3066C2.67684 23.7917 3.88515 25 5.37059 25H9.36038C9.76474 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Dashboard</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.20834 22.9167C5.20899 23.469 5.42869 23.9985 5.81925 24.3891C6.20981 24.7797 6.73934 24.9994 7.29167 25H17.7083C18.2607 24.9994 18.7902 24.7797 19.1808 24.3891C19.5713 23.9985 19.791 23.469 19.7917 22.9167V22.0052H5.20834V22.9167Z" />
                                <path d="M19.7917 2.08333C19.791 1.531 19.5713 1.00148 19.1808 0.610917C18.7902 0.220358 18.2607 0.00065473 17.7083 0L7.29167 0C6.73934 0.00065473 6.20981 0.220358 5.81925 0.610917C5.42869 1.00148 5.20899 1.531 5.20834 2.08333V3.125H19.7917V2.08333Z" />
                                <path d="M24.7098 6.70052L21.5848 3.44531L20.0819 4.88802L21.3893 6.25H19.7917V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7779 8.07926 24.857 7.96602 24.9121 7.8407C24.9671 7.71538 24.9969 7.58045 24.9997 7.44361C25.0026 7.30677 24.9785 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7098 6.70052Z" />
                                <path d="M16.6667 6.24999H19.7917V4.16666H5.20834V16.6667H8.33334V18.75H5.20834V20.8333H19.7917V8.33332H16.6667V6.24999ZM15.625 10.4167H11.9792C11.841 10.4167 11.7086 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7994 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3058C11.7086 11.4035 11.841 11.4583 11.9792 11.4583H13.0208C13.6666 11.4577 14.2897 11.697 14.7689 12.1299C15.2482 12.5627 15.5495 13.1582 15.6144 13.8008C15.6793 14.4433 15.5032 15.087 15.1202 15.607C14.7371 16.127 14.1746 16.4861 13.5417 16.6146V17.7083H11.4583V16.6667H9.375V14.5833H13.0208C13.159 14.5833 13.2914 14.5285 13.3891 14.4308C13.4868 14.3331 13.5417 14.2006 13.5417 14.0625C13.5417 13.9244 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.159 13.5417 13.0208 13.5417H11.9792C11.3334 13.5423 10.7104 13.303 10.2311 12.8701C9.75181 12.4372 9.45047 11.8417 9.38557 11.1992C9.32067 10.5567 9.49683 9.91293 9.87985 9.39297C10.2629 8.87301 10.8254 8.51392 11.4583 8.38541V7.29166H13.5417V8.33332H15.625V10.4167Z" />
                                <path d="M3.4983 16.6667L4.88736 15.3354L3.44596 13.8312L0.320958 16.826C0.222142 16.9207 0.142956 17.034 0.0879278 17.1593C0.0328995 17.2846 0.00310698 17.4195 0.00025318 17.5564C-0.00260062 17.6932 0.0215402 17.8293 0.0712959 17.9568C0.121052 18.0843 0.195447 18.2007 0.290229 18.2995L3.41523 21.5547L4.91809 20.112L3.61067 18.75H5.20833V16.6667H3.4983Z" />
                            </svg>

                        </div>
                        <h4>Transactions</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_714)">
                                    <path d="M12.3219 12.0426C13.9763 12.0426 15.4089 11.4492 16.5794 10.2785C17.75 9.10793 18.3434 7.67571 18.3434 6.02109C18.3434 4.36705 17.75 2.93463 16.5792 1.76372C15.4085 0.593374 13.9761 0 12.3219 0C10.6672 0 9.235 0.593374 8.06446 1.76391C6.89392 2.93444 6.30035 4.36686 6.30035 6.02109C6.30035 7.67571 6.89392 9.10813 8.06465 10.2787C9.23538 11.449 10.6678 12.0426 12.3219 12.0426Z" />
                                    <path d="M22.8579 19.2237C22.8241 18.7366 22.7558 18.2052 22.6553 17.644C22.5538 17.0787 22.4232 16.5443 22.2668 16.0558C22.1052 15.5509 21.8855 15.0523 21.6139 14.5745C21.332 14.0786 21.0009 13.6468 20.6293 13.2915C20.2408 12.9197 19.7651 12.6209 19.215 12.4028C18.6668 12.186 18.0593 12.0761 17.4095 12.0761C17.1543 12.0761 16.9075 12.1808 16.4309 12.4912C16.1375 12.6825 15.7944 12.9037 15.4114 13.1484C15.0839 13.3571 14.6402 13.5526 14.0923 13.7296C13.5576 13.9026 13.0148 13.9903 12.479 13.9903C11.9432 13.9903 11.4006 13.9026 10.8654 13.7296C10.318 13.5528 9.87434 13.3573 9.54723 13.1486C9.16786 12.9062 8.82454 12.6849 8.5268 12.491C8.05073 12.1806 7.80373 12.0759 7.54852 12.0759C6.8985 12.0759 6.2912 12.186 5.74322 12.403C5.19352 12.6207 4.71764 12.9195 4.32873 13.2917C3.95737 13.6472 3.62606 14.0788 3.34454 14.5745C3.07312 15.0523 2.85339 15.5507 2.69165 16.056C2.53544 16.5444 2.40479 17.0787 2.30331 17.644C2.2028 18.2044 2.13451 18.736 2.10075 19.2243C2.06757 19.7026 2.05078 20.1991 2.05078 20.7005C2.05078 22.0055 2.46563 23.062 3.28369 23.8412C4.09164 24.61 5.16071 25.0001 6.46076 25.0001H18.4984C19.7985 25.0001 20.8672 24.6102 21.6753 23.8412C22.4936 23.0626 22.9084 22.0059 22.9084 20.7003C22.9082 20.1966 22.8912 19.6998 22.8579 19.2237Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Accounts</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_682)">
                                    <path d="M3.92074 10.2271H1.1367C0.509043 10.2271 0 10.7362 0 11.3638V23.8638C0 24.491 0.509043 25 1.1367 25H3.92074C4.5484 25 5.05692 24.491 5.05692 23.8638V11.3638C5.05692 10.7362 4.5484 10.2271 3.92074 10.2271Z" />
                                    <path d="M10.5686 13.6356H7.78457C7.15638 13.6356 6.64787 14.1447 6.64787 14.7723V23.8627C6.64787 24.4909 7.15638 24.9994 7.78457 24.9994H10.5686C11.1963 24.9994 11.7048 24.4904 11.7048 23.8627V14.7723C11.7048 14.1447 11.1963 13.6356 10.5686 13.6356Z" />
                                    <path d="M17.2154 13.6356H14.4314C13.8037 13.6356 13.2952 14.1447 13.2952 14.7723V23.8627C13.2952 24.4909 13.8037 24.9994 14.4314 24.9994H17.2154C17.8436 24.9994 18.3521 24.4904 18.3521 23.8627V14.7723C18.3521 14.1447 17.8436 13.6356 17.2154 13.6356Z" />
                                    <path d="M23.8633 10.2271H21.0793C20.4516 10.2271 19.9431 10.7362 19.9431 11.3638V23.8638C19.9431 24.4915 20.4516 25 21.0793 25H23.8633C24.491 25 25 24.4904 25 23.8638V11.3638C25 10.7362 24.491 10.2271 23.8633 10.2271Z" />
                                    <path d="M12.8314 6.84573V8.89148C13.4505 8.85052 14.1032 8.5601 14.1032 7.87871C14.1032 7.17552 13.3878 6.96967 12.8314 6.84573Z" />
                                    <path d="M11.0521 4.39732C11.0521 4.91434 11.4367 5.21328 12.2117 5.3686V3.51807C11.5074 3.53881 11.0521 3.95264 11.0521 4.39732Z" />
                                    <path d="M12.5 0C9.05372 0 6.25 2.80426 6.25 6.25C6.25 9.69468 9.05372 12.4989 12.5 12.4989C15.9463 12.4989 18.75 9.69468 18.75 6.25C18.75 2.80426 15.9463 0 12.5 0ZM12.8314 9.94628V10.5862C12.8314 10.7622 12.6963 10.9378 12.5197 10.9378C12.3452 10.9378 12.2117 10.7622 12.2117 10.5862V9.94628C10.4654 9.90372 9.59681 8.86011 9.59681 8.04362C9.59681 7.63138 9.84628 7.39309 10.2367 7.39309C11.3941 7.39309 10.4941 8.81915 12.2117 8.89096V6.73138C10.6798 6.45319 9.75213 5.78138 9.75213 4.63457C9.75213 3.22979 10.9202 2.50532 12.2117 2.46489V1.91383C12.2117 1.73777 12.3452 1.56223 12.5197 1.56223C12.6963 1.56223 12.8314 1.73777 12.8314 1.91383V2.46489C13.6367 2.48617 15.2904 2.99149 15.2904 4.00479C15.2904 4.40745 14.9894 4.64468 14.6378 4.64468C13.9654 4.64468 13.975 3.53989 12.8314 3.51862V5.48191C14.1952 5.77181 15.4032 6.17447 15.4032 7.76596C15.4032 9.15 14.3702 9.85213 12.8314 9.94628Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Investments</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_676)">
                                    <path d="M22.9608 7.16339V6.80772C22.9608 5.17271 21.6306 3.8425 19.9956 3.8425H2.96522C1.33016 3.84255 0 5.17271 0 6.80772V7.16339H22.9608Z" />
                                    <path d="M13.5651 16.7017C13.5651 15.1636 14.0598 13.7017 14.9731 12.4968H0V16.6331C0 18.2681 1.33016 19.5983 2.96522 19.5983H14.1911C13.7813 18.7007 13.5651 17.7179 13.5651 16.7017ZM11.4804 15.803H8.92125V14.2796H11.4804V15.803ZM3.41545 14.2796H7.39781V15.803H3.41545V14.2796Z" />
                                    <path d="M16.5547 10.9734C17.7165 10.1606 19.0967 9.72262 20.5443 9.72262C21.3822 9.72262 22.1973 9.86974 22.9608 10.1509V8.68689H0V10.9734H16.5547Z" />
                                    <path d="M26 16.7017C26 13.6886 23.5574 11.246 20.5443 11.246C17.5312 11.246 15.0885 13.6886 15.0885 16.7017C15.0885 19.7148 17.5311 22.1574 20.5443 22.1574C23.5574 22.1574 26 19.7148 26 16.7017ZM21.2797 19.6163V20.2363H20.518V20.2363V20.2363H19.7562V19.6209C19.2957 19.4649 18.9189 19.1906 18.5509 18.9215L19.4503 17.6918C19.9446 18.0534 20.1976 18.2271 20.5443 18.2271C20.7403 18.2271 20.899 18.1339 20.9585 17.9837C21.0305 17.8019 20.9287 17.6344 20.6861 17.5356C20.6861 17.5356 19.5973 17.1725 19.0939 16.6593C18.6715 16.2287 18.5372 15.6219 18.6716 15.0447C18.807 14.4635 19.1995 14.009 19.7562 13.7821V13.167H21.2797V13.7566C21.6666 13.8641 21.9941 14.0229 22.1824 14.1251L21.4555 15.4639C20.9736 15.2024 20.5303 15.1238 20.3577 15.1828C20.1903 15.24 20.1649 15.3492 20.1553 15.3903C20.1417 15.4486 20.1345 15.538 20.2276 15.6418C20.3172 15.7416 21.2605 16.1247 21.2605 16.1247C22.2782 16.539 22.7572 17.5795 22.3747 18.5449C22.176 19.0466 21.7761 19.4266 21.2797 19.6163Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Credit Cards</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_701)">
                                    <path d="M14.4923 15.3372C18.6873 15.3372 22.1002 11.8971 22.1002 7.66863C22.1002 3.44019 18.6873 0 14.4923 0C10.2974 0 6.88451 3.44014 6.88451 7.66858C6.88451 11.897 10.2974 15.3372 14.4923 15.3372ZM12.0477 10.0616C12.269 9.72331 12.7227 9.62835 13.061 9.84975C13.5539 10.1722 13.7399 10.2019 14.3903 10.1973C15.0252 10.1931 15.3936 9.71994 15.4671 9.28202C15.503 9.06901 15.5167 8.54886 14.872 8.32097C14.1159 8.05365 13.342 7.74812 12.8037 7.32586C12.2653 6.9036 12.0188 6.17464 12.1604 5.42358C12.3138 4.60936 12.8818 3.96121 13.6427 3.73205C13.6496 3.73 13.6563 3.72835 13.6632 3.7263V3.44882C13.6632 3.04457 13.9909 2.71684 14.3952 2.71684C14.7994 2.71684 15.1272 3.04457 15.1272 3.44882V3.68018C15.6243 3.79886 15.9715 4.02631 16.1125 4.13167C16.4363 4.37376 16.5026 4.83242 16.2605 5.15625C16.0185 5.48009 15.5598 5.54635 15.236 5.30421C15.086 5.19207 14.6714 4.95101 14.0649 5.13376C13.7106 5.24053 13.6187 5.59013 13.599 5.6947C13.5603 5.9002 13.6037 6.09281 13.7072 6.17391C14.0803 6.46661 14.7521 6.72578 15.3599 6.94064C16.4808 7.33684 17.1041 8.37529 16.9109 9.5247C16.816 10.0887 16.5323 10.6119 16.1119 10.9981C15.8256 11.2613 15.4923 11.4488 15.1272 11.556V11.8883C15.1272 12.2926 14.7994 12.6203 14.3952 12.6203C13.9909 12.6203 13.6632 12.2926 13.6632 11.8883V11.629C13.1899 11.5716 12.7926 11.4236 12.2595 11.0748C11.9213 10.8535 11.8264 10.3999 12.0477 10.0616Z" />
                                    <path d="M2.77447 17.7967H1.10544C0.701189 17.7967 0.373455 18.1245 0.373455 18.5287V24.267C0.373455 24.6712 0.701189 24.999 1.10544 24.999H2.77451V17.7967H2.77447Z" />
                                    <path d="M24.4119 17.7456C23.0399 16.3736 20.8075 16.3736 19.4356 17.7456L17.2429 19.9383L16.3442 20.8371C15.981 21.2003 15.4883 21.4044 14.9746 21.4044H10.6045C10.2098 21.4044 9.87014 21.101 9.85155 20.7068C9.83174 20.2858 10.1671 19.9383 10.5837 19.9383H15.0257C15.9188 19.9383 16.6935 19.3025 16.847 18.4227C16.8823 18.2206 16.9007 18.0129 16.9007 17.8009C16.9007 17.3959 16.5726 17.0673 16.1677 17.0673H13.7337C12.9383 17.0673 12.1744 16.7065 11.3657 16.3244C10.5174 15.9237 9.6403 15.5094 8.61469 15.4411C7.71766 15.3814 6.81859 15.4796 5.94231 15.7326C5.00405 16.0036 4.32959 16.8371 4.24781 17.7996C4.24468 17.7993 4.24151 17.7993 4.23834 17.7991V24.9965L16.8493 25C17.7164 25 18.5316 24.6623 19.1448 24.0491L24.4117 18.7822C24.6981 18.4961 24.6981 18.0319 24.4119 17.7456Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Loans</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_655)">
                                    <path d="M24.7853 1.25045L23.7495 0.214663C23.5336 -0.00135204 23.2064 -0.0605316 22.9287 0.0654447L17.3655 2.52135C17.1465 2.62096 16.9907 2.8213 16.9478 3.05743C16.9052 3.2942 16.9806 3.53638 17.1505 3.70636L21.2936 7.84946C21.4636 8.01943 21.7058 8.09477 21.9426 8.05224C22.1787 8.00933 22.379 7.85351 22.4787 7.63452L24.9345 2.07125C25.0605 1.79357 25.0013 1.46637 24.7853 1.25045Z" />
                                    <path d="M4.73142 16.1255L0.642562 20.2143C-0.214223 21.0711 -0.214223 22.4649 0.642562 23.3217L1.6783 24.3574C2.53509 25.2142 3.92888 25.2142 4.78562 24.3574L8.87448 20.2685L4.73142 16.1255ZM4.27493 21.7711C3.98865 22.0574 3.52532 22.0574 3.23909 21.7711C2.95291 21.4848 2.95291 21.0215 3.23909 20.7353L5.25642 18.718C5.5427 18.4317 6.00598 18.4317 6.29216 18.718C6.57844 19.0043 6.57844 19.4675 6.29216 19.7538L4.27493 21.7711Z" />
                                    <path d="M11.9818 17.1612L7.83874 13.0181C7.2677 12.447 6.33821 12.447 5.76721 13.0181C5.19617 13.5891 5.19617 14.5186 5.76721 15.0896L9.91032 19.2327C10.4813 19.8038 11.4108 19.8038 11.9818 19.2327C12.5529 18.6618 12.5529 17.7322 11.9818 17.1612Z" />
                                    <path d="M19.2222 7.84941L17.1506 5.77783L11.464 11.4644C10.8919 10.8924 9.96454 10.8924 9.39242 11.4644L8.8745 11.9824L13.0176 16.1255L13.5355 15.6075C14.1076 15.0354 14.1076 14.1081 13.5355 13.536L19.2222 7.84941Z" />
                                    <path d="M23.7147 17.4979C22.5257 16.3089 21.0959 16.0532 19.4554 16.3464L16.1256 13.017L15.3305 13.8121C15.5923 14.796 15.3377 15.8762 14.5709 16.6431L14.054 17.1599L16.3456 19.4513C16.1145 20.7442 16.1362 21.8409 16.9392 23.0303C17.8659 24.4034 19.4877 25.1839 21.1868 24.95C21.4677 24.9114 21.7023 24.7166 21.7926 24.4478C21.8829 24.1791 21.8133 23.8823 21.6128 23.6818L20.6056 22.6763V20.605H22.679L23.6807 21.6067C23.8816 21.8076 24.1791 21.8767 24.4481 21.7857C24.7171 21.6947 24.9113 21.459 24.9491 21.1774C25.128 19.8452 24.6921 18.4749 23.7147 17.4979Z" />
                                    <path d="M8.64425 5.53236C8.93492 3.90898 8.69957 2.48085 7.49273 1.27314C6.67159 0.45205 5.57296 0 4.39923 0C4.20163 0 4.00612 0.0128906 3.81315 0.0384277C3.53136 0.0758299 3.29548 0.270263 3.20436 0.53955C3.11325 0.808739 3.18283 1.10639 3.38381 1.30737L4.39533 2.30883V4.39447H2.31364L1.30964 3.37641C1.1091 3.17587 0.812082 3.10649 0.543235 3.19697C0.274485 3.28745 0.0801008 3.52231 0.0414778 3.80331C-0.181666 5.42816 0.522385 7.07889 1.95886 8.04862C3.1528 8.85301 4.25602 8.87293 5.53932 8.64159L7.84015 10.9462L8.35719 10.4291C9.12408 9.66224 10.2042 9.40779 11.1881 9.66951L11.9829 8.87469L8.64425 5.53236Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Services</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_717)">
                                    <path d="M4.81137 16.6678C5.06276 16.8174 5.27861 17.0121 5.45086 17.2371H8.70602V14.0806L7.16251 13.1236C6.81875 12.9105 6.71285 12.459 6.92596 12.1153C7.13913 11.7716 7.5904 11.6657 7.93432 11.8787L9.43838 12.8112L10.7494 11.9984C8.13449 8.41283 8.73502 3.33221 12.2157 0.464604C6.48226 -1.45611 0.46783 2.8135 0.440684 8.94559C0.426525 12.1976 2.15786 15.0882 4.81137 16.6678Z" />
                                    <path d="M5.90887 18.7018H12.8418V20.3618H5.90887V18.7018Z" />
                                    <path d="M10.1707 14.0806V17.237H13.29C13.4556 17.0185 13.6623 16.8312 13.9027 16.6896C14.5684 16.2978 15.1795 15.8199 15.7211 15.273C14.1912 14.9285 12.8173 14.1677 11.7248 13.1163C11.6831 13.1434 11.3829 13.3291 10.1707 14.0806Z" />
                                    <path d="M17.5777 0.00238037C13.7374 0.00238037 10.5959 3.17576 10.5959 7.03297C10.5959 10.6611 13.3811 13.6655 16.9522 13.9861C21.0849 14.3554 24.5595 11.0793 24.5595 7.03297C24.5595 3.18323 21.4275 0.00238037 17.5777 0.00238037ZM18.311 10.2073V10.3603C18.311 10.7648 17.9831 11.0927 17.5787 11.0927C17.1742 11.0927 16.8463 10.7648 16.8463 10.3603V10.2901C16.5089 10.2309 16.2006 10.1046 15.8112 9.84984C15.4727 9.62843 15.3778 9.17456 15.5992 8.83607C15.8206 8.49753 16.2746 8.40271 16.613 8.62408C16.97 8.85765 17.0857 8.87586 17.5737 8.87249C18.0449 8.86937 18.2326 8.49953 18.2692 8.28153C18.3022 8.0858 18.2652 7.82557 17.9022 7.69731C17.2942 7.48234 16.6707 7.23568 16.229 6.88923C15.2231 6.10034 15.5268 4.29851 16.8464 3.81901V3.71297C16.8464 3.30851 17.1743 2.98062 17.5787 2.98062C17.9832 2.98062 18.3111 3.30851 18.3111 3.71297V3.75359C18.6719 3.85543 18.9625 4.03965 19.1622 4.24265C19.4458 4.53101 19.4419 4.99468 19.1535 5.2783C18.8653 5.56177 18.4019 5.55801 18.1184 5.27015C18.0775 5.23026 17.8519 5.04214 17.3635 5.18925C17.1685 5.24798 17.1161 5.45021 17.1047 5.5108C17.0808 5.63725 17.1148 5.7225 17.1329 5.73675C17.4092 5.95343 17.9236 6.15131 18.3904 6.31634C20.3206 6.9986 20.0855 9.56578 18.311 10.2073Z" />
                                    <path d="M7.08064 22.7053C7.08064 23.9706 8.11004 25 9.37535 25C10.6407 25 11.6701 23.9706 11.6701 22.7053V21.8265H7.08064V22.7053Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>My Privileges</h4>
                    </li>

                    <li>
                        <div className="image">
                            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_674)">
                                    <path d="M22.6985 9.41406H22.1678C21.9954 8.87451 21.7778 8.35039 21.5172 7.84683L21.8931 7.47095C22.8045 6.56055 22.7801 5.10156 21.8934 4.21582L20.7845 3.10693C19.8993 2.22056 18.44 2.19487 17.5293 3.10659L17.1532 3.48276C16.6496 3.22222 16.1254 3.00464 15.5859 2.83223V2.30142C15.5859 1.03242 14.5535 0 13.2845 0H11.7155C10.4465 0 9.41406 1.03242 9.41406 2.30142V2.83223C8.87456 3.00459 8.35039 3.22217 7.84683 3.48276L7.471 3.10693C6.56216 2.19702 5.10293 2.21836 4.21592 3.10664L3.10688 4.21558C2.22056 5.10093 2.19492 6.56001 3.10659 7.4707L3.48276 7.84687C3.22217 8.35044 3.00464 8.87451 2.83223 9.41411H2.30146C1.03247 9.41406 0 10.4465 0 11.7155V13.2845C0 14.5535 1.03247 15.5859 2.30146 15.5859H2.83223C3.00464 16.1255 3.22217 16.6496 3.48276 17.1532L3.10688 17.5291C2.19551 18.4395 2.21992 19.8984 3.10659 20.7842L4.21553 21.8931C5.10073 22.7794 6.56001 22.8051 7.47065 21.8934L7.84683 21.5172C8.35039 21.7778 8.87456 21.9954 9.41406 22.1678V22.6986C9.41406 23.9676 10.4465 25 11.7155 25H13.2845C14.5535 25 15.586 23.9676 15.586 22.6986V22.1678C16.1255 21.9954 16.6497 21.7778 17.1532 21.5172L17.5291 21.8931C18.4379 22.803 19.8971 22.7816 20.7841 21.8934L21.8932 20.7844C22.7795 19.899 22.8051 18.4399 21.8935 17.5292L21.5173 17.1531C21.7779 16.6495 21.9954 16.1254 22.1678 15.5858H22.6986C23.9676 15.5858 25 14.5534 25 13.2844V11.7154C25 10.4465 23.9675 9.41406 22.6985 9.41406ZM12.5 17.9395C9.50064 17.9395 7.06055 15.4993 7.06055 12.5C7.06055 9.50068 9.50064 7.06055 12.5 7.06055C15.4994 7.06055 17.9395 9.50068 17.9395 12.5C17.9395 15.4993 15.4994 17.9395 12.5 17.9395Z" />
                                </g>
                            </svg>
                        </div>
                        <h4>Setting</h4>
                    </li>

                </ul>
            </nav>

        </div>

    </aside>

}
