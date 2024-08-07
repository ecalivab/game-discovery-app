import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { useAppStore } from "../../store/useAppStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { setPlatformId, selectedPlatform } = useAppStore((s) => ({
    setPlatformId: s.setPlatformId,
    selectedPlatform: s.gameQuery.platformId,
  }));

  const platform = data?.results.find((p) => p.id === selectedPlatform);

  if (error) {
    return null;
  }

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
