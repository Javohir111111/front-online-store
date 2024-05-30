import { useParams } from "react-router-dom";
import { HeartOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Rate } from 'antd';
import { useState, useEffect } from "react";
import { Section, Container } from '@containers';
import { postAPI } from "@service";
import "./style.scss"


const id = () => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | boolean>("");
    const [count, setCount] = useState(1);

    const App: React.FC = () => <Rate allowHalf defaultValue={3} />;
    const { id } = useParams() as { id: string };
    // const navigate = useNavigate();
    const sale = data?.cost - ((data?.cost / 100) * 10)


    async function getById(id: any): Promise<any> {
        try {
            const response = await postAPI.getById(id);
            console.log(response)
            if (response.status !== 200) {
                setError(response.statusText);
                setLoading(false);
            }
            setData(response.data);
            setLoading(false);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getById(id);
    }, [])

    return (
        <Section title={data?.product_name}>
            <Container>
                <div className="flex items-start gap-[100px]">
                    <div className="w-[500px] h-[400px]">
                        <img className="w-full "  src={data?.image_url ? data?.image_url : "https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?resize=400x300&vertical=center"} alt="" />
                    </div>
                    <div className="p-15 w-[600px]">
                            <App />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[10px]">
                                <p className="text-[13px] whitespace-nowrap text-[#00000084]">4.9 ( 816 оценок )</p>
                                <p className="text-[13px] whitespace-nowrap text-[#00000084]">Более 11000 заказов</p>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer" onClick={() => console.log(data?.product_id)}>
                                <HeartOutlined />
                                <p className="whitespace-nowrap">В желания</p>
                            </div>
                        </div>
                        <div className="mt-[20px] gap-[30px] items-center mb-5">
                            <h1 className="mt-[20px] mb-[10px] text-[24px] font-medium ">{data?.description}</h1>
                            <p className="mb-[10px]"><span className="mr-5">Made in:</span> {data?.made_in}</p>
                            <h2 className="mb-[10px]">Продавец: <span className="ml-5">Garnier</span></h2>
                            <h2 className="text-[15px] text-[#000000d2]">Доставка: <span className="text-[#000000d2] ml-5">1 день, бесплатно</span></h2>
                        </div>
                        <hr />
                        <p className="mt-[20px]">Количество:</p>
                        <div className="flex mt-[10px] gap-[30px]  items-center">
                            <div className="flex border p-[6px] gap-[20px] rounded-[3px]">
                                {count == 1 ? <MinusOutlined disabled /> : <MinusOutlined onClick={() => setCount(count - 1)} />}
                                <p className="mx-3">{count}</p>
                                {count == data?.count ? <PlusOutlined disabled /> : <PlusOutlined onClick={() => setCount(count + 1)} />}
                            </div>
                            <p className="text-[16px] text-[#4fac3f]">В наличии {data?.count}</p>
                        </div>
                        <p className="mt-[20px] mb-[10px]">Цена:</p>
                        <div className="flex gap-[30px] items-center">
                            <p className="font-bold text-[20px]">{sale * count} сум</p>
                            <p className="text-[#000000ad] font-medium" style={{ textDecoration: 'line-through' }}>{data?.cost} сум</p>
                            <p className="bg-[yellow] rounded p-1 text-[13px]">Распродажа</p>
                        </div>
                        <div className="flex mt-5 items-center justify-between bg-slate-100 hover:bg-slate-200 duration-100 rounded">
                            <p className="text-[13px] p-3"><span className="bg-[yellow] rounded p-1 text-[13px]">От 5 716 сум/мес</span> в рассрочку</p>
                            <RightOutlined className="pr-3" />
                        </div>
                        <div className="flex justify-between gap-2 mt-[20px]">
                            <button className="bg-[#7000FF] block w-full h-[50px] rounded-lg text-white  font-semibold">Добавить в корзину</button>
                            <button className="text-[#7000FF] block w-full h-[50px] rounded-lg border-[#7000FF] border font-semibold">Купить в 1 клик</button>
                        </div>
                        <div className="border rounded-2xl p-[12px] mt-5">
                            <div className="border-b pb-3">
                                <p className="font-semibold">Быстрая доставка от 1 дня</p>
                                <p className="">В пункты выдачи Uzum или курьером</p>
                            </div>
                            <div className="border-b py-3">
                                <p className="font-semibold">Безопасная оплата удобным способом</p>
                                <p className="whitespace-nowrap">Оплачивайте картой, наличными или в рассрочку</p>
                            </div>
                            <div className="pt-3">
                                <p className="font-semibold">Простой и быстрый возврат</p>
                                <p className="whitespace-nowrap">Примем товары в течение 10 дней и сразу вернём деньги</p>
                            </div>
                        </div>
                        <p className="py-4  my-3 px-2">For : {data?.for_gender}</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default id;