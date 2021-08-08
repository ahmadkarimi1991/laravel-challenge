<section class="challenge-form">
    <div class="container">
        <div class="challenge-form__wrap">
            <h2 class="challenge-form__title">فرم ثبت نام شبکه ابریارهای آروان</h2>
            <p class="challenge-form__text">در صورتی که مایل باشید می‌توانید از برای ما رزومه بفرستید، لطفا فرم زیر را پر کنید.</p>

            <form id="challenge-form" method="POST">
                <div class="challenge-form__group">
                    <div class="challenge-form__group-title">اطلاعات فردی</div>
                    <div class="challenge-form__group-wrap">
                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap">
                                <label for="name" class="challenge-form__label challenge-form__label--required">نام</label>
                                <input type="text" id="name" class="challenge-form__input" placeholder="نام و نام خانوادگی">
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>

                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap">
                                <label for="phone" class="challenge-form__label challenge-form__label--required">تلفن</label>
                                <input type="text" id="phone" class="challenge-form__input challenge-form__input--ltr" placeholder="0952654484">
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>

                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap">
                                <label for="email" class="challenge-form__label challenge-form__label--required">ایمیل</label>
                                <input type="text" id="email" class="challenge-form__input challenge-form__input--ltr" placeholder="example@email.com">
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>

                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap">
                                <label for="companyName" class="challenge-form__label">نام شرکت</label>
                                <input type="text" id="companyName" class="challenge-form__input" placeholder="نام شرکت یا سازمان">
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>
                    </div>
                </div>

                <div class="challenge-form__group">
                    <div class="challenge-form__group-title">سوابق و تجربیات</div>
                    <div class="challenge-form__group-wrap">
                        <div class="challenge-form__field">
                            <label class="challenge-form__field-wrap">
                                <span for="resume" class="challenge-form__label challenge-form__label--required">رزومه</span>
                                <input type="file" id="resume" class="challenge-form__input-file">
                                <div class="challenge-form__input-file-name"></div>
                                <div class="challenge-form__input-file-type">انتخاب فایل pdf</div>
                            </label>
                            <div class="challenge-form__field-hint">حداکثر حجم مجاز فایل ۱ مگابایت است</div>
                        </div>

                        <div class="challenge-form__field">
                            <label class="challenge-form__field-wrap">
                                <span for="portfolio" class="challenge-form__label">پرتفولیو</span>
                                <input type="file" id="portfolio" class="challenge-form__input-file">
                                <div class="challenge-form__input-file-name"></div>
                                <div class="challenge-form__input-file-type">انتخاب فایل pdf</div>
                            </label>
                            <div class="challenge-form__field-hint">حداکثر حجم مجاز فایل ۱ مگابایت است</div>
                        </div>
                    </div>
                </div>

                <div class="challenge-form__group">
                    <div class="challenge-form__group-title">توضیحات تکمیلی</div>
                    <div class="challenge-form__group-wrap">
                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap challenge-form__field-wrap-select">
                                <label for="type" class="challenge-form__label">نوع ابریار</label>
                                <div class="challenge-form__select">
                                    <select name="type" id="type">
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">ابریار کوچ ابری</option>
                                        <option value="2">ابریار فنی</option>
                                        <option value="3">ابریار بازارچه</option>
                                        <option value="4">ابریار آموزش</option>
                                        <option value="5">ابریار فروش</option>
                                    </select>
                                </div>
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>

                        <div class="challenge-form__field">
                            <div class="challenge-form__field-wrap challenge-form__field-wrap-select">
                                <label for="level" class="challenge-form__label">سطح ابریار</label>
                                <div class="challenge-form__select">
                                    <select name="level" id="level">
                                        <option value="">انتخاب کنید</option>
                                        <option value="1">سطح ۱</option>
                                        <option value="2">سطح ۲</option>
                                        <option value="3">سطح ۳</option>
                                        <option value="4">سطح ۴</option>
                                    </select>
                                </div>
                            </div>
                            <div class="challenge-form__field-hint"></div>
                        </div>

                        <div class="challenge-form__field challenge-form__field--full">
                            <div class="challenge-form__field-wrap challenge-form__field-wrap--textarea">
                                <label for="description" class="challenge-form__label challenge-form__label--hidden-mobile">توضیحات</label>
                                <textarea name="description" id="description" class="challenge-form__textarea" cols="30" rows="10" placeholder="در صورتی نیاز به توضیحات تکمیلی لطفا در این باکس برای ما یادداشت بگذارید"></textarea>
                            </div>
                            {{-- <div class="challenge-form__field-hint"></div> --}}
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div class="challenge-form__button-wrap">
                    <div class="challenge-form__message">پر کردن فیلدهایی که با ستاره مشخص شده ضروری است</div>

                    {{-- <button type="submit" class="">ثبت نام</button> --}}
                    <input type="submit" value="ثبت نام" class="challenge-form__button-submit">
                </div>

                <div class="challenge-form__notif challenge-form__notif--hidden">داده‌ها با موفقیت ثبت شدند</div>
            </form>

        </div>
    </div>
</section>
