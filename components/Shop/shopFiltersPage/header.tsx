import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, HStack, Text } from '@chakra-ui/react';

const ShopHeader = () => {
    return (
        <HStack my={5}>
            <Breadcrumb
                spacing={'8px'}
                separator={<ChevronRightIcon color="gray.500" />}
            >
                <BreadcrumbItem>
                    <Text
                        color="gray.500"
                        fontSize="sm"
                    >
                        Home
                    </Text>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Text
                        color="gray.500"
                        fontSize="sm"
                    >
                        Shop
                    </Text>
                </BreadcrumbItem>
            </Breadcrumb>
        </HStack>
    );
};
export default ShopHeader;
