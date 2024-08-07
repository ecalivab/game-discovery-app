import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useAppStore } from "../../store/useAppStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const { setSortOrder, selectedSortOrder } = useAppStore((s) => ({
    setSortOrder: s.setSortOrder,
    selectedSortOrder: s.gameQuery.sortOrder,
  }));

  const currentSortOrder = sortOrders.find(
    (so) => so.value === selectedSortOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((so) => (
            <MenuItem
              onClick={() => setSortOrder(so.value)}
              key={so.value}
              value={so.value}
            >
              {so.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
