<section class="challenge-projects">
    <div class="container">
        <h2 class="challenge-projects__title">فهرست پروژه‌ها</h2>
        <div class="challenge-projects__text">با فهرست پروژه‌های در جریان ابر آروان بیش‌تر آشنا شوید</div>
        <div class="challenge-projects__wrap">
            <div class="challenge-projects__tabs">
                <div class="challenge-projects__tab challenge-projects__tab--active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.311" height="22.121" viewBox="0 0 22.311 22.121">
                        <g id="edit" transform="translate(-1 -0.879)">
                            <path id="Path_130374" data-name="Path 130374" d="M11,4H4A2,2,0,0,0,2,6V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V13" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path id="Path_130375" data-name="Path 130375" d="M18.5,2.5a2.121,2.121,0,0,1,3,3L12,15,8,16l1-4Z" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </g>
                    </svg>

                    پروژه‌های فعال
                </div>

                <div class="challenge-projects__tab">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                        <g id="loader" transform="translate(-1 -1)">
                            <line id="Line_905" data-name="Line 905" y2="4" transform="translate(12 2)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_906" data-name="Line 906" y2="4" transform="translate(12 18)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_907" data-name="Line 907" x2="2.83" y2="2.83" transform="translate(4.93 4.93)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_908" data-name="Line 908" x2="2.83" y2="2.83" transform="translate(16.24 16.24)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_909" data-name="Line 909" x2="4" transform="translate(2 12)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_910" data-name="Line 910" x2="4" transform="translate(18 12)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_911" data-name="Line 911" y1="2.83" x2="2.83" transform="translate(4.93 16.24)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                            <line id="Line_912" data-name="Line 912" y1="2.83" x2="2.83" transform="translate(16.24 4.93)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                        </g>
                    </svg>

                    در حال ارزیابی
                </div>

                <div class="challenge-projects__tab">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="20" viewBox="0 0 21.414 20">
                        <g id="Group_12687" data-name="Group 12687" transform="translate(-1047 -1955)">
                            <g id="check-square_2_" data-name="check-square (2)" transform="translate(1045 1953)">
                                <path id="Path_130373" data-name="Path 130373" d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H16" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </g>
                            <path id="Path_130372" data-name="Path 130372" d="M9,11l3,3L22,4" transform="translate(1045 1953)" fill="none" stroke="#71839f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </g>
                    </svg>

                    پروژه‌های اجرا شده
                </div>
            </div>
            <div class="challenge-projects__boxes">
                <div class="challenge-projects__box challenge-projects__box--active">
                    @include('sections.projects.box')
                </div>
                <div class="challenge-projects__box">
                    @include('sections.projects.box')
                </div>
                <div class="challenge-projects__box">
                    @include('sections.projects.box')
                </div>
            </div>
        </div>
    </div>
</section>
