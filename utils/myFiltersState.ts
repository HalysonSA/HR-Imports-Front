import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../components/Redux/FiltersSlice';
import { Filters, ReduxState } from '../components/Redux/type';

const useFiltersSync = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state: ReduxState) => state);

    useEffect(() => {
        var sizes: string[] = [];
        var colors: string[] = [];
        var brands: string[] = [];
        var categories: string[] = [];
        var prices: number[] = [];
        var materials: string[] = [];

        products &&
            products.forEach((product) => {
                product.size.forEach((size) => {
                    if (!sizes.includes(size)) {
                        sizes.push(size);
                    }
                });

                product.color.forEach((color) => {
                    if (!colors.includes(color)) {
                        colors.push(color);
                    }
                });

                if (!brands.includes(product.brand)) {
                    brands.push(product.brand);
                }

                if (!categories.includes(product.category)) {
                    categories.push(product.category);
                }

                if (!prices.includes(product.price)) {
                    prices.push(product.price);
                }

                if (!materials.includes(product.material)) {
                    materials.push(product.material);
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
export default useFiltersSync;
