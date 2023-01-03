import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={500}
                    height={500}
                    src="https://p4.wallpaperbetter.com/wallpaper/962/109/154/blur-book-candle-close-up-wallpaper-preview.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='text-white'>BookShop</h5>
                    <p className="text-white">
                        Trong những cuốn sách ẩn chứa linh hồn của suốt chiều dài quá khứ...
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={500}
                    height={500}
                    src="https://images.pexels.com/photos/1846422/pexels-photo-1846422.jpeg?cs=srgb&dl=pexels-sheep-1846422.jpg&fm=jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h5 className='text-white'>BookShop</h5>
                    <p className="text-white">
                        Không có người bạn nào trung thành như một cuốn sách.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={500}
                    height={500}
                    src="https://c1.wallpaperflare.com/preview/791/207/698/dark-gloomy-books-pages.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h5 className='text-white'>BookShop</h5>
                    <p className="text-white">
                        Chỉ trong sách, con người mới biết đến sự thật, tình yêu và cái đẹp hoàn hảo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;