<section class="challenge-form">
    <div class="container">
        <div class="challenge-form__wrap">
            <h2 class="challenge-form__title">فرم ثبت نام شبکه ابریارهای آروان</h2>
            <p class="challenge-form__text">در صورتی که مایل باشید می‌توانید از برای ما رزومه بفرستید، لطفا فرم زیر را پر کنید.</p>

            <div class="challenge-form__group">
                <div class="challenge-form__group-title">اطلاعات فردی</div>
                <div class="challenge-form__group-wrap">
                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="name" class="challenge-form__label challenge-form__label--required">نام</label>
                            <input type="text" id="name" class="challenge-form__input" placeholder="نام و نام خانوادگی">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="phone" class="challenge-form__label challenge-form__label--required">تلفن</label>
                            <input type="text" id="phone" class="challenge-form__input challenge-form__input--ltr" placeholder="0952654484">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="email" class="challenge-form__label challenge-form__label--required">ایمیل</label>
                            <input type="email" id="email" class="challenge-form__input challenge-form__input--ltr" placeholder="example@email.com">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="companyName" class="challenge-form__label">نام شرکت</label>
                            <input type="text" id="companyName" class="challenge-form__input" placeholder="نام شرکت یا سازمان">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>
                </div>
            </div>

            <div class="challenge-form__group">
                <div class="challenge-form__group-title">سوابق و تجربیات</div>
                <div class="challenge-form__group-wrap">
                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="resume" class="challenge-form__label challenge-form__label--required">رزومه</label>
                            <input type="file" id="resume">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="portfolio" class="challenge-form__label">پرتفولیو</label>
                            <input type="file" id="portfolio">
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>
                </div>
            </div>

            <div class="challenge-form__group">
                <div class="challenge-form__group-title">توضیحات تکمیلی</div>
                <div class="challenge-form__group-wrap">
                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="type" class="challenge-form__label">نوع ابریار</label>
                            <select name="type" id="type">
                                <option value="">ابریار کوچ ابری</option>
                                <option value="">ابریار فنی</option>
                                <option value="">ابریار بازارچه</option>
                                <option value="">ابریار آموزش</option>
                                <option value="">ابریار فروش</option>
                            </select>
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field">
                        <div class="challenge-form__field-wrap">
                            <label for="level" class="challenge-form__label">سطح ابریار</label>
                            <select name="level" id="level">
                                <option value="">سطح ۱</option>
                                <option value="">سطح ۲</option>
                                <option value="">سطح</option>
                                <option value="">سطح ۴</option>
                            </select>
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>

                    <div class="challenge-form__field" style="grid-row: span 2/span 2;">
                        <div class="challenge-form__field-wrap">
                            <label for="description" class="challenge-form__label">توضیحات</label>
                            <textarea name="description" id="description" cols="30" rows="10" placeholder="در صورتی نیاز به توضیحات تکمیلی لطفا در این باکس برای ما یادداشت بگذارید"></textarea>
                        </div>
                        <div class="challenge-form__field-hint"></div>
                    </div>
                </div>

                <div>

                </div>
            </div>

            <div class="challenge-form__button-wrap">
                <div class="challenge-form__message">پر کردن فیلدهایی که با ستاره مشخص شده ضروری است</div>

                <button type="submit" class="challenge-form__button-submit">ثبت نام</button>
            </div>
        </div>
    </div>
</section>
