import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../components/Redux/FiltersSlice';
import { Filters, ReduxState } from '../components/Redux/type';

const MyFiltersState = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state: ReduxState) => state);

    var sizes: string[] = [];
    var colors: string[] = [];
    var brands: string[] = [];
    var categories: string[] = [];
    var prices: number[] = [];
    var materials: string[] = [];

    useEffect(() => {
        products &&
            products.map((product) => {
                if (product.size) {
                    product.size.map((size) => {
                        if (!sizes.includes(size)) {
                            sizes.push(size);
                        }
                    });
                    product.color.map((color) => {
                        if (!colors.includes(color)) {
                            colors.push(color);
                        }
                    });

                    if (!brands.includes(product.brand)) {
                        brands.push(product.brand);
                    }
                    if (!prices.includes(product.price)) {
                        prices.push(product.price);
                    }
                    if (!categories.includes(product.category)) {
                        categories.push(product.category);
                    }
                    if (!materials.includes(product.material)) {
                        materials.push(product.material);
                    }
                }
            });
        const filters: Filters = {
            colors: colors,
            sizes: sizes,
            brands: brands,
            categories: categories,
            prices: prices,
            materials: materials,
        };

        dispatch(setFilters(filters));
    }, [products && products.length > 0]);
};
export default MyFiltersState;
