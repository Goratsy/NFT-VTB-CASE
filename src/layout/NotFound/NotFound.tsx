import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="flex justify-center flex-col items-center">
            <h1 className="text-center text-6xl my-7">Страница не найдена</h1>
            <Link to='/listemployees' className="flex justify-center items-center gap-4 flex-row lg:py-[12px] lg:px-[26px] py-[6px] px-[13px] max-w-[400px] text-white rounded-full bg-[#005EFF] whitespace-nowrap cursor-pointer hover:bg-[#141BEA]">Перейти на валидную страницу</Link>
        </section>
    );
}

export {NotFound};