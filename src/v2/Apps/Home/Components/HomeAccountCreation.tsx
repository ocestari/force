import { ContextModule, Intent } from "@artsy/cohesion"
import { Button, Flex, Spacer, Text } from "@artsy/palette"
import * as React from "react"
import { ModalType } from "v2/Components/Authentication/Types"
import { useSystemContext } from "v2/System"
import { RouterLink } from "v2/System/Router/RouterLink"
import { openAuthModal } from "v2/Utils/openAuthModal"

export const HomeAccountCreation: React.FC = () => {
  const { mediator } = useSystemContext()

  return (
    <Flex flexDirection={["column", "row"]} justifyContent={"space-between"}>
      <Flex flex={1} flexDirection={"column"} alignItems={"center"}>
        <Text variant={"xl"}>Create an account</Text>
        <Spacer my={[1, 2]} />
        <Button
          // @ts-ignore
          as={RouterLink}
          variant="secondaryBlue"
          size="large"
          onClick={() => {
            openAuthModal(mediator!, {
              mode: ModalType.login,
              intent: Intent.login,
              contextModule: ContextModule.header,
            })
          }}
        >
          Sign Up
        </Button>
      </Flex>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Flex flexDirection={"column"}>
          <ul style={{ listStyle: "circle" }}>
            <li>
              <Text variant={"md"}>Get personalized recommendations</Text>
            </li>
            <li>
              <Text variant={"md"}>Access over 1 million auction results</Text>
            </li>
            <li>
              <Text variant={"md"}>
                Sign up for Artsy's emails and get fresh art every week
              </Text>
            </li>
          </ul>
        </Flex>
      </Flex>
    </Flex>
  )
}
