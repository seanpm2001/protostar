from pathlib import Path

import pytest

from protostar.commands.test.test_command import TestCommand
from tests.integration.conftest import assert_cairo_test_cases


@pytest.mark.asyncio
async def test_expect_events(mocker):
    testing_summary = await TestCommand(
        project=mocker.MagicMock(),
        protostar_directory=mocker.MagicMock(),
    ).test(targets=[f"{Path(__file__).parent}/expect_events_test.cairo"])

    assert_cairo_test_cases(
        testing_summary,
        expected_passed_test_cases_names=[
            "test_expect_event_by_name_and_data",
            "test_expect_event_by_name",
            "test_expect_event_emitted_by_external_contract",
            "test_expect_event_by_contract_address",
            "test_expect_events_in_declared_order",
            "test_allow_checking_for_events_in_any_order",
        ],
        expected_failed_test_cases_names=[
            "test_fail_on_data_mismatch",
            "test_fail_when_no_events_were_emitted",
            "test_fail_on_contract_address_mismatch",
            "test_fail_message_about_first_not_found_event",
        ],
    )