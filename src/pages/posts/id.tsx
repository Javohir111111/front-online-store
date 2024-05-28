import { useParams, useNavigate } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Section, Container } from '@containers';
import { postAPI } from "@service";
import "./style.scss"


const id = () => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | boolean>("");


    const { id } = useParams() as { id: string };
    const navigate = useNavigate();



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
        <Section title="Post item">
            <Container>

                <div className="flex justify-between">
                    <span></span>
                    <button onClick={() => navigate(-1)} className="bg-red-600 text-white px-3 py-2 rounded-xl active:bg-red-700 m-2">
                        go back
                    </button>
                </div>
                <div className="flex items-center gap-[15px]">
                    <div className="w-[400px] ">
                        <img src={data?.image_url} alt="" />
                    </div>
                    <div className="p-15">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[10px]">
                                <p className="text-[13px] text-[#00000084]">4.9 ( 816 оценок )</p>
                                <p className="text-[13px] text-[#00000084]">Более 11000 заказов</p>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer" onClick={() => console.log(data?.product_id)}>
                                <HeartOutlined />
                                <p>В желания</p>
                            </div>
                        </div>
                        <h1 className="py-4 my-3 ">{data?.description}</h1>
                        <p className=" text-[24px] font-medium">Made in: {data?.made_in}</p>
                        <h2 className="">Продавец: <span>Garnier</span></h2>
                        <h2 className="">Доставка: <span>1 день, бесплатно</span></h2>
                        <hr />
                        <p className="py-4 border my-3 px-2">{data?.for_gender}</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default id;